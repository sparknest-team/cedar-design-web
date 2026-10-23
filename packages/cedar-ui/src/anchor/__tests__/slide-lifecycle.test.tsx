import { afterEach, expect, test, vi } from 'vitest'
import { slide } from '../utils'

const restores: (() => void)[] = []
afterEach(() => { vi.restoreAllMocks(); restores.splice(0).reverse().forEach(restore => restore()) })
function fixture(reduced = false, current = () => true) {
  let now = 0
  const frames: FrameRequestCallback[] = []
  vi.spyOn(Date, 'now').mockImplementation(() => now)
  vi.spyOn(window.performance, 'now').mockImplementation(() => now)
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => { frames.push(callback); return frames.length })
  const cancelFrame = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {})
  const view = document.defaultView!
  if (view !== window) {
    vi.spyOn(view.performance, 'now').mockImplementation(() => now)
    vi.spyOn(view, 'requestAnimationFrame').mockImplementation(callback => { frames.push(callback); return frames.length })
    vi.spyOn(view, 'cancelAnimationFrame').mockImplementation(cancelFrame)
  }
  const descriptor = Object.getOwnPropertyDescriptor(view, 'matchMedia')
  Object.defineProperty(view, 'matchMedia', { configurable: true, value: () => ({ matches: reduced }) })
  restores.push(() => { if (descriptor) Object.defineProperty(view, 'matchMedia', descriptor); else Reflect.deleteProperty(view, 'matchMedia') })
  const el = document.createElement('div'); el.scrollTop = 10
  const done = vi.fn()
  const cancel = slide(el, 90, done, current)
  const deliver = (time: number) => { now = time; frames.splice(0).forEach(callback => callback(time)) }
  return { el, done, cancel, frames, cancelFrame, deliver, setReduced: (value: boolean) => { reduced = value } }
}
test('slide preserves300ms and quartOut progression', () => {
  const f = fixture(); f.deliver(150)
  expect(f.el.scrollTop).toBe(85)
  f.deliver(300); f.deliver(300)
  expect(f.el.scrollTop).toBe(90)
  expect(f.done).toHaveBeenCalledTimes(1)
})
test('slide returns cancellation and cancels its pending frame', () => {
  const f = fixture()
  expect(f.cancel).toBeTypeOf('function'); f.cancel()
  expect(f.cancelFrame).toHaveBeenCalled()
})
test('cancelled raw frame cannot write or schedule another frame', () => {
  const f = fixture(); const old = f.frames.at(-1)!
  expect(f.cancel).toBeTypeOf('function'); f.cancel(); f.frames.length = 0
  old(150)
  expect(f.el.scrollTop).toBe(10)
  expect(f.frames).toHaveLength(0)
  expect(f.done).not.toHaveBeenCalled()
})
test('a consumed raw frame cannot fork the animation', () => {
  const f = fixture(); const old = f.frames.at(-1)!
  f.frames.length = 0; old(150)
  const count = f.frames.length; old(150)
  expect(f.frames).toHaveLength(count)
})
test('cancellation does not jump to target or report completion', () => {
  const f = fixture(); f.deliver(150)
  expect(f.cancel).toBeTypeOf('function'); f.cancel(); f.deliver(300); f.deliver(300)
  expect(f.el.scrollTop).toBe(85)
  expect(f.done).not.toHaveBeenCalled()
})
test('current owner reduced preference skips interpolation', () => {
  const f = fixture(true)
  expect(f.el.scrollTop).toBe(90)
  expect(f.frames).toHaveLength(0)
  expect(f.done).toHaveBeenCalledTimes(1)
})
test('scroll setter reentrant cancellation cannot enqueue more work', () => {
  const f = fixture()
  expect(f.cancel).toBeTypeOf('function')
  Object.defineProperty(f.el, 'scrollTop', { configurable: true, get: () => 10, set: () => f.cancel() })
  f.deliver(150)
  expect(f.frames).toHaveLength(0)
  expect(f.done).not.toHaveBeenCalled()
})
test('caller lifetime invalidation rejects a queued interpolation', () => {
  let active = true
  const f = fixture(false, () => active)
  active = false; f.deliver(150)
  expect(f.el.scrollTop).toBe(10)
  expect(f.frames).toHaveLength(0)
  expect(f.done).not.toHaveBeenCalled()
})
test('current preference change finishes on the next frame without more interpolation', () => {
  const f = fixture(); f.setReduced(true); f.deliver(150)
  expect(f.el.scrollTop).toBe(90)
  expect(f.frames).toHaveLength(0)
  expect(f.done).toHaveBeenCalledTimes(1)
})
