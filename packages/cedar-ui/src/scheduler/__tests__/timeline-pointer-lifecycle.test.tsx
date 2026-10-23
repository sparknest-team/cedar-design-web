import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { useTimelinePointer } from '../use-timeline-pointer'

const owners: Array<ReturnType<typeof mount>> = []
let frames: Map<number, FrameRequestCallback>, sequence: number
beforeEach(() => {
  frames = new Map(); sequence = 0
  vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => { frames.set(++sequence, callback); return sequence })
  vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation((id) => { frames.delete(id) })
})
afterEach(() => { owners.splice(0).forEach((owner) => owner.unmount()); vi.restoreAllMocks() })
function fixture() {
  const active = ref(true)
  const start = vi.fn(), move = vi.fn(), end = vi.fn(), drop = vi.fn(), finished = vi.fn()
  let gesture!: ReturnType<typeof useTimelinePointer>
  const Host = defineComponent({ setup() {
    gesture = useTimelinePointer({ locked: () => false, start, move, drop, end })
    return () => h('div', { class: 'c-scheduler__virtual-rows' }, h('button', 'source'))
  } })
  const owner = mount(defineComponent({ setup: () => () => h(KeepAlive, null, { default: () => active.value ? h(Host) : null }) }))
  owners.push(owner)
  const viewport = owner.get('.c-scheduler__virtual-rows').element as HTMLElement
  const origin = owner.get('button').element
  const geometry = vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue({ left: 0, top: 0, right: 200, bottom: 200, width: 200, height: 200 } as DOMRect)
  const begin = () => gesture.begin({ button: 0, clientX: 100, clientY: 100, currentTarget: origin } as PointerEvent,
    { id: 'a', title: 'event', start: '2026-10-16', end: '2026-10-17' }, false, 'r', finished)
  const pointerMove = () => document.dispatchEvent(new MouseEvent('pointermove', { clientX: 195, clientY: 195, cancelable: true }))
  const takeFrame = () => { const [id, callback] = frames.entries().next().value!; frames.delete(id); return callback }
  return { active, owner, viewport, geometry, gesture, begin, pointerMove, takeFrame, start, move, end, finished }
}
test('active edge scrolling preserves geometry and refreshes the target', async () => {
  const f = fixture(); f.begin(); f.pointerMove(); f.takeFrame()(0); await nextTick()
  expect(f.viewport.scrollTop).toBeGreaterThan(0); expect(f.move).toHaveBeenCalledTimes(2)
})
test('consumed frame cannot replay scroll or fork the frame chain', async () => {
  const f = fixture(); f.begin(); f.pointerMove(); const frame = f.takeFrame(); frame(0); await nextTick()
  const top = f.viewport.scrollTop; frame(0); await nextTick()
  expect(f.viewport.scrollTop).toBe(top); expect(frames.size).toBe(1)
})
test('cancelled old frame cannot cancel a replacement gesture', () => {
  const f = fixture(); f.begin(); f.pointerMove(); const old = f.takeFrame(); f.gesture.cancel(); f.begin(); f.pointerMove()
  const count = f.end.mock.calls.length; old(0)
  expect(f.end).toHaveBeenCalledTimes(count); expect(frames.size).toBe(1)
})
test('deactivation releases a pending edge frame and old delivery is inert', async () => {
  const f = fixture(); f.begin(); f.pointerMove(); const old = f.takeFrame()
  f.active.value = false; await nextTick(); old(0); await nextTick()
  expect(frames.size).toBe(0); expect(f.viewport.scrollTop).toBe(0); expect(f.end).toHaveBeenCalledTimes(1)
})
test('retained begin while inactive cannot bind a new gesture', async () => {
  const f = fixture(); f.active.value = false; await nextTick(); f.begin(); f.pointerMove()
  expect(frames.size).toBe(0); expect(f.start).not.toHaveBeenCalled()
})
test('geometry cancellation prevents subsequent scroll and frame scheduling', () => {
  const f = fixture(); f.begin(); f.pointerMove()
  f.geometry.mockImplementation(() => { f.gesture.cancel(); return { left: 0, top: 0, right: 200, bottom: 200 } as DOMRect })
  f.takeFrame()(0)
  expect(f.viewport.scrollTop).toBe(0); expect(frames.size).toBe(0)
})
test('start callback cancellation cannot publish a ghost or move afterwards', () => {
  const f = fixture(); f.start.mockImplementation(() => f.gesture.cancel()); f.begin(); f.pointerMove()
  expect(f.gesture.ghost.value).toBeUndefined(); expect(f.move).not.toHaveBeenCalled(); expect(frames.size).toBe(0)
})
test('retained begin after disposal cannot schedule', () => {
  const f = fixture(); owners.pop(); f.owner.unmount(); f.begin(); f.pointerMove()
  expect(frames.size).toBe(0); expect(f.start).not.toHaveBeenCalled()
})
test('activation accepts a new gesture without replaying the old one', async () => {
  const f = fixture(); f.begin(); f.pointerMove(); const old = f.takeFrame()
  f.active.value = false; await nextTick(); f.active.value = true; await nextTick()
  expect(frames.size).toBe(0); f.begin(); f.pointerMove(); old(0); f.takeFrame()(0); await nextTick()
  expect(f.viewport.scrollTop).toBeGreaterThan(0); expect(frames.size).toBe(1)
})
test('cancelled edge nextTick cannot refresh an ended gesture', async () => {
  const f = fixture(); f.begin(); f.pointerMove(); f.takeFrame()(0); f.gesture.cancel(); await nextTick()
  expect(f.move).toHaveBeenCalledTimes(1); expect(frames.size).toBe(0)
})
test('old move listener cannot start again after cancellation', () => {
  const add = vi.spyOn(document, 'addEventListener')
  const f = fixture(); f.begin()
  const old = add.mock.calls.find(([name]) => name === 'pointermove')![1] as EventListener
  f.gesture.cancel(); old(new MouseEvent('pointermove', { clientX: 195, clientY: 195 }))
  expect(f.start).not.toHaveBeenCalled(); expect(f.gesture.ghost.value).toBeUndefined()
})
test('finished callback replacement retains its own cleanup', () => {
  const f = fixture(); f.begin(); f.pointerMove()
  f.finished.mockImplementationOnce(() => { f.begin(); f.pointerMove() })
  f.gesture.cancel()
  expect(frames.size).toBe(1); expect(f.end).not.toHaveBeenCalled()
  f.gesture.cancel()
  expect(frames.size).toBe(0); expect(f.end).toHaveBeenCalledTimes(1)
})
