import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import TimeGrid from '../components/SchedulerTimeGrid.vue'
import { schedulerMessages } from '../locale'
import { captureTimerGlobals, restoreTimerFixture } from './timer-globals'

const owners: Array<ReturnType<typeof mount>> = []
let pointsDescriptor: PropertyDescriptor | undefined
let restoreGlobals: () => void
beforeEach(() => { restoreGlobals = captureTimerGlobals(); pointsDescriptor = Object.getOwnPropertyDescriptor(document, 'elementsFromPoint'); vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] }) })
afterEach(() => {
  try { owners.splice(0).forEach((owner) => owner.unmount()) } finally {
    try { restoreTimerFixture(restoreGlobals) } finally {
      if (pointsDescriptor) Object.defineProperty(document, 'elementsFromPoint', pointsDescriptor)
      else delete (document as any).elementsFromPoint
    }
  }
})
function fixture() {
  const active = ref(true), step = ref(30)
  const columns = [{ key: 'day', date: new Date(2026, 9, 16), label: 'day', resource: { id: 'r', label: 'resource' } }]
  const add = vi.spyOn(document, 'addEventListener'), timer = vi.spyOn(globalThis, 'setTimeout')
  const Host = defineComponent({ setup: () => () => h(TimeGrid, {
    columns, events: [], startHour: 8, endHour: 10, step: step.value, dragToCreate: true,
    disabled: false, locked: false, messages: schedulerMessages['en-US'], locale: 'en-US',
  }) })
  const owner = mount(defineComponent({ setup: () => () => h(KeepAlive, null, { default: () => active.value ? h(Host) : null }) }))
  owners.push(owner)
  const grid = owner.getComponent(TimeGrid)
  const origin = grid.findAll('.c-scheduler__time-cell')[0], target = grid.findAll('.c-scheduler__time-cell')[3]
  for (const cell of [origin, target]) vi.spyOn(cell.element, 'getBoundingClientRect').mockReturnValue({ top: 0, height: 20 } as DOMRect)
  Object.defineProperty(document, 'elementsFromPoint', { configurable: true, value: () => [target.element] })
  const press = (pointerType = 'mouse') => origin.trigger('pointerdown', { pointerId: 7, button: 0, pointerType, clientX: 5, clientY: 5 })
  const event = (name: string, id = 7) => Object.assign(new MouseEvent(name, { clientX: 20, clientY: 15, cancelable: true }), { pointerId: id })
  const move = () => document.dispatchEvent(event('pointermove'))
  const up = () => document.dispatchEvent(event('pointerup'))
  const cancel = () => document.dispatchEvent(event('pointercancel'))
  const oldListener = (name: string) => add.mock.calls.filter(([type]) => type === name).at(-1)![1] as EventListener
  const count = () => grid.emitted('create-range')?.length ?? 0
  return { active, step, owner, grid, origin, target, press, event, move, up, cancel, oldListener, count, add, timer }
}
test('current mouse selection creates the snapped resource range', async () => {
  const f = fixture(); await f.press(); f.move(); f.up()
  expect(f.count()).toBe(1); const [start, end, resource] = f.grid.emitted('create-range')![0]
  expect(+(end as Date)).toBeGreaterThan(+(start as Date)); expect(resource).toBe('r')
})
test('cancelled old move and up cannot recreate a range', async () => {
  const f = fixture(); await f.press(); const move = f.oldListener('pointermove'), up = f.oldListener('pointerup')
  f.cancel(); move(f.event('pointermove')); up(f.event('pointerup')); expect(f.count()).toBe(0)
})
test('old cancellation cannot clear a new range selection', async () => {
  const f = fixture(); await f.press(); const old = f.oldListener('pointercancel'); f.cancel(); await f.press(); f.move()
  old(f.event('pointercancel')); f.up(); expect(f.count()).toBe(1)
})
test('released range up callback is consumed once', async () => {
  const f = fixture(); await f.press(); f.move(); const old = f.oldListener('pointerup'); f.up(); f.move(); old(f.event('pointerup'))
  expect(f.count()).toBe(1)
})
test('unrelated pointercancel does not erase current selection', async () => {
  const f = fixture(); await f.press(); f.move(); document.dispatchEvent(f.event('pointercancel', 99)); f.up()
  expect(f.count()).toBe(1)
})
test('deactivation cancels old selection and retained listeners', async () => {
  const f = fixture(); await f.press(); const move = f.oldListener('pointermove'), up = f.oldListener('pointerup')
  f.active.value = false; await nextTick(); move(f.event('pointermove')); up(f.event('pointerup')); expect(f.count()).toBe(0)
})
test('step changes invalidate the old range geometry', async () => {
  const f = fixture(); await f.press(); f.move(); f.step.value = 15; await nextTick(); f.up(); expect(f.count()).toBe(0)
})
test('geometry disposal cannot bind late range listeners', async () => {
  const f = fixture(); vi.spyOn(f.origin.element, 'getBoundingClientRect').mockImplementation(() => {
    owners.pop(); f.owner.unmount(); return { top: 0, height: 20 } as DOMRect
  })
  f.add.mockClear(); await f.press(); expect(f.add.mock.calls.filter(([name]) => name === 'pointermove')).toHaveLength(0)
})
test('old click unlock cannot release a newer completed selection', async () => {
  const f = fixture(); await f.press(); f.move(); f.up()
  const old = f.timer.mock.calls.filter(([, delay]) => delay === 0).at(-1)![0] as () => void
  await f.press(); f.move(); f.up(); old(); await f.origin.trigger('click')
  expect(f.grid.emitted('create') ?? []).toHaveLength(0)
})
test('cancelled touch hold cannot arm retained old listeners', async () => {
  const f = fixture(); await f.press('touch'); const hold = f.timer.mock.calls.filter(([, delay]) => delay === 350).at(-1)![0] as () => void
  const move = f.oldListener('pointermove'), up = f.oldListener('pointerup'); f.cancel(); hold(); move(f.event('pointermove')); up(f.event('pointerup'))
  expect(f.count()).toBe(0)
})
test('current touch hold arms selection after350ms', async () => {
  const f = fixture(); await f.press('touch'); vi.advanceTimersByTime(350); f.move(); f.up(); expect(f.count()).toBe(1)
})
test('activation accepts a fresh range without restoring the old one', async () => {
  const f = fixture(); await f.press(); f.move(); f.active.value = false; await nextTick(); f.active.value = true; await nextTick()
  await f.press(); f.move(); f.up(); expect(f.count()).toBe(1)
})
test('current zero-delay unlock allows a later ordinary click', async () => {
  const f = fixture(); await f.press(); f.move(); f.up(); await f.origin.trigger('click')
  expect(f.grid.emitted('create') ?? []).toHaveLength(0); vi.advanceTimersByTime(0); await f.origin.trigger('click')
  expect(f.grid.emitted('create') ?? []).toHaveLength(1)
})
test('target geometry cancellation cannot publish a selection afterwards', async () => {
  const f = fixture(); await f.press()
  vi.spyOn(f.target.element, 'getBoundingClientRect').mockImplementation(() => { f.cancel(); return { top: 0, height: 20 } as DOMRect })
  f.move(); f.up(); expect(f.count()).toBe(0)
})
