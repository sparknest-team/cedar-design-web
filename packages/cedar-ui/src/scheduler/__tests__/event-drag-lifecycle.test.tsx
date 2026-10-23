import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import SchedulerEvent from '../components/SchedulerEvent.vue'
import { captureTimerGlobals, restoreTimerFixture } from './timer-globals'

const owners: Array<ReturnType<typeof mount>> = []
let restoreGlobals: () => void
beforeEach(() => { restoreGlobals = captureTimerGlobals(); vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] }) })
afterEach(() => { try { owners.splice(0).forEach((owner) => owner.unmount()) } finally { restoreTimerFixture(restoreGlobals) } })
function fixture() {
  const active = ref(true), disabled = ref(false)
  const hooks: { start?: () => void; drop?: () => void } = {}
  const item = ref({ id: 'a', title: 'event', start: '2026-10-16', end: '2026-10-17' })
  const add = vi.spyOn(document, 'addEventListener'), timer = vi.spyOn(globalThis, 'setTimeout')
  const Host = defineComponent({ setup: () => () => h(SchedulerEvent, {
    event: item.value, disabled: disabled.value, onDragStart: () => hooks.start?.(), onPointerDrop: () => hooks.drop?.(),
  }) })
  const owner = mount(defineComponent({ setup: () => () => h(KeepAlive, null, { default: () => active.value ? h(Host) : null }) }))
  owners.push(owner)
  const card = owner.getComponent(SchedulerEvent)
  const press = (pointerType = 'mouse') => card.trigger('pointerdown', { pointerId: 7, button: 0, pointerType, clientX: 10, clientY: 10 })
  const event = (type: string, id = 7) => Object.assign(new MouseEvent(type, { clientX: 30, clientY: 30, cancelable: true }), { pointerId: id })
  const move = () => document.dispatchEvent(event('pointermove'))
  const up = () => document.dispatchEvent(event('pointerup'))
  const cancel = () => document.dispatchEvent(event('pointercancel'))
  const oldListener = (name: string) => add.mock.calls.filter(([type]) => type === name).at(-1)![1] as EventListener
  const count = (name: string) => card.emitted(name)?.length ?? 0
  return { owner, card, active, disabled, item, press, move, up, cancel, event, oldListener, count, hooks, add, timer }
}
test('active standalone drag moves, drops and ends once', async () => {
  const f = fixture(); await f.press(); f.move(); f.up(); await nextTick()
  expect(f.count('drag-start')).toBe(1); expect(f.count('pointer-drop')).toBe(1); expect(f.count('drag-end')).toBe(1)
  expect(document.querySelector('.c-scheduler__drag-ghost')).toBeNull()
})
test('cancelled standalone move cannot restart the old gesture', async () => {
  const f = fixture(); await f.press(); const old = f.oldListener('pointermove'); f.cancel(); old(f.event('pointermove'))
  expect(f.count('drag-start')).toBe(0); expect(f.count('pointer-move')).toBe(0)
})
test('old release cannot detach a replacement gesture', async () => {
  const f = fixture(); await f.press(); f.move(); const old = f.oldListener('pointerup'); f.cancel(); await f.press(); f.move()
  const ends = f.count('drag-end'); old(f.event('pointerup')); expect(f.count('drag-end')).toBe(ends)
  f.move(); expect(f.count('pointer-move')).toBe(3)
})
test('cancel callback is consumed once', async () => {
  const f = fixture(); await f.press(); f.move(); const old = f.oldListener('pointercancel'); f.cancel(); old(f.event('pointercancel'))
  expect(f.count('drag-end')).toBe(1)
})
test('unrelated pointer cancellation cannot end the current gesture', async () => {
  const f = fixture(); await f.press(); f.move(); document.dispatchEvent(f.event('pointercancel', 99))
  expect(f.count('drag-end')).toBe(0); f.up(); expect(f.count('pointer-drop')).toBe(1)
})
test('cancelled touch hold and retained move cannot arm the old gesture', async () => {
  const f = fixture(); await f.press('touch'); const hold = f.timer.mock.calls.filter(([, delay]) => delay === 350).at(-1)![0] as () => void
  const old = f.oldListener('pointermove'); f.cancel(); hold(); old(f.event('pointermove'))
  expect(f.count('drag-start')).toBe(0)
})
test('start callback changing the current event to readonly cannot publish a ghost or move', async () => {
  const f = fixture(); f.hooks.start = () => { Object.assign(f.item.value, { readonly: true }) }; await f.press(); f.move(); await nextTick()
  expect(f.count('pointer-move')).toBe(0); expect(document.querySelector('.c-scheduler__drag-ghost')).toBeNull()
})
test('event replacement cancels the old standalone session', async () => {
  const f = fixture(); await f.press(); f.move(); f.item.value = { ...f.item.value, id: 'b' }; await nextTick(); f.up()
  expect(f.count('pointer-drop')).toBe(0)
})
test('old click unlock cannot release suppression during a new drag', async () => {
  const f = fixture(); await f.press(); f.move(); f.up()
  const old = f.timer.mock.calls.filter(([, delay]) => delay === 0).at(-1)![0] as () => void
  await f.press(); f.move(); old(); await f.card.get('button').trigger('click')
  expect(f.count('select')).toBe(0)
})
test('old move cannot cross deactivation and a new activation', async () => {
  const f = fixture(); await f.press(); const old = f.oldListener('pointermove'); f.active.value = false; await nextTick()
  f.active.value = true; await nextTick(); old(f.event('pointermove')); expect(f.count('drag-start')).toBe(0)
})
test('touch hold arms the current standalone drag after350ms', async () => {
  const f = fixture(); await f.press('touch'); vi.advanceTimersByTime(350); f.move(); f.up()
  expect(f.count('drag-start')).toBe(1); expect(f.count('pointer-drop')).toBe(1)
})
test('geometry disposal cannot continue to styles or bind listeners', () => {
  const f = fixture()
  const down = f.card.vm.$.subTree.props!.onPointerdown as (event: PointerEvent) => void
  vi.spyOn(f.card.element, 'getBoundingClientRect').mockImplementation(() => {
    owners.pop(); f.owner.unmount(); return { width: 200 } as DOMRect
  })
  f.add.mockClear()
  expect(() => down({ button: 0, pointerId: 7, clientX: 10, clientY: 10 } as PointerEvent)).not.toThrow()
  expect(f.add.mock.calls.filter(([name]) => name === 'pointermove')).toHaveLength(0)
})
test('drop callback replacement keeps its listeners and drag state', async () => {
  const f = fixture(); await f.press(); f.move()
  const down = f.card.vm.$.subTree.props!.onPointerdown as (event: PointerEvent) => void
  f.hooks.drop = () => down({ button: 0, pointerId: 7, clientX: 10, clientY: 10 } as PointerEvent)
  f.up(); f.move()
  expect(f.count('drag-start')).toBe(2); expect(f.count('pointer-move')).toBe(2)
  expect(f.count('drag-end')).toBe(1)
})
test('activation accepts a fresh standalone drag', async () => {
  const f = fixture(); await f.press(); f.move(); f.active.value = false; await nextTick()
  f.active.value = true; await nextTick(); await f.press(); f.move(); f.up()
  expect(f.count('drag-start')).toBe(2); expect(f.count('pointer-drop')).toBe(1)
})
