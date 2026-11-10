import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import ResizeObserver from '../../_components/resize-observer'

const callbacks: Array<(entries: ResizeObserverEntry[]) => void> = []
vi.mock('resize-observer-polyfill', () => ({
  default: class {
    constructor(callback: (entries: ResizeObserverEntry[]) => void) { callbacks.push(callback) }
    observe() {}
    disconnect() {}
  },
}))

test('layout-changing resize consumers run in the next frame; unmount cancels pending and late deliveries', () => {
  const view = document.defaultView!
  const frames = new Map<number, FrameRequestCallback>()
  let sequence = 0
  const raf = vi.spyOn(view, 'requestAnimationFrame').mockImplementation(callback => {
    frames.set(++sequence, callback)
    return sequence
  })
  const cancel = vi.spyOn(view, 'cancelAnimationFrame').mockImplementation(id => { frames.delete(id) })
  const resize = vi.fn()
  const wrapper = mount(ResizeObserver, { attrs: { onResize: resize }, slots: { default: () => <div /> } })
  try {
    const notify = callbacks.at(-1)!
    const first = { target: wrapper.element, contentRect: { width: 100 } } as ResizeObserverEntry
    const latest = { target: wrapper.element, contentRect: { width: 120 } } as ResizeObserverEntry
    notify([first])
    notify([latest])
    expect(resize).not.toHaveBeenCalled()
    expect(frames.size).toBe(1)
    const frame = [...frames.values()][0]
    frames.clear()
    frame(0)
    expect(resize).toHaveBeenCalledTimes(1)
    expect(resize).toHaveBeenLastCalledWith(latest)
    notify([first])
    frame(0)
    expect(resize).toHaveBeenCalledTimes(1)
    expect(frames.size).toBe(1)
    const stale = [...frames.values()][0]
    wrapper.unmount()
    expect(frames.size).toBe(0)
    stale(0)
    notify([latest])
    expect(resize).toHaveBeenCalledTimes(1)
    expect(frames.size).toBe(0)
  } finally {
    wrapper.unmount()
    raf.mockRestore()
    cancel.mockRestore()
  }
})
