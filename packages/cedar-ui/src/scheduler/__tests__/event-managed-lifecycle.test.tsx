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
  const timer = vi.spyOn(globalThis, 'setTimeout')
  const Host = defineComponent({ setup: () => () => h(SchedulerEvent, {
    event: { id: 'a', title: 'event', start: '2026-10-16', end: '2026-10-17' },
    disabled: disabled.value, managedPointer: true,
  }) })
  const owner = mount(defineComponent({ setup: () => () => h(KeepAlive, null, { default: () => active.value ? h(Host) : null }) }))
  owners.push(owner)
  const card = owner.getComponent(SchedulerEvent)
  const press = (pointerType = 'touch') => card.trigger('pointerdown', { button: 0, pointerId: 7, pointerType, clientX: 10, clientY: 10 })
  const hold = () => timer.mock.calls.filter(([, delay]) => delay === 350).at(-1)![0] as () => void
  const startCount = () => card.emitted('pointer-start')?.length ?? 0
  return { owner, active, disabled, card, press, hold, startCount, timer }
}
test('managed touch starts only after the existing350ms hold', async () => {
  const f = fixture(); await f.press(); vi.advanceTimersByTime(349); expect(f.startCount()).toBe(0)
  vi.advanceTimersByTime(1); expect(f.startCount()).toBe(1)
})
test('released managed hold rejects already queued callback', async () => {
  const f = fixture(); await f.press(); const old = f.hold()
  document.dispatchEvent(Object.assign(new Event('pointerup'), { pointerId: 7 })); old()
  expect(f.startCount()).toBe(0)
})
test('managed hold callback is consumed once', async () => {
  const f = fixture(); await f.press(); const callback = f.hold(); callback(); callback()
  expect(f.startCount()).toBe(1)
})
test('deactivation cancels a pending managed hold', async () => {
  const f = fixture(); await f.press(); const callback = f.hold(); f.active.value = false; await nextTick(); callback()
  expect(f.startCount()).toBe(0)
})
test('disabling cancels old hold eligibility, not only its timer', async () => {
  const f = fixture(); await f.press(); const callback = f.hold(); f.disabled.value = true; await nextTick(); callback()
  expect(f.startCount()).toBe(0)
})
test('old managed finished callback cannot suppress a newer gesture click', async () => {
  const f = fixture(); await f.press('mouse')
  const finished = f.card.emitted('pointer-start')![0][2] as (moved: boolean) => void
  await f.press('mouse'); finished(true); await f.card.get('button').trigger('click')
  expect(f.card.emitted('select') ?? []).toHaveLength(1)
})
test('disposed finished callback cannot schedule click unlock', async () => {
  const f = fixture(); await f.press('mouse')
  const finished = f.card.emitted('pointer-start')![0][2] as (moved: boolean) => void
  owners.pop(); f.owner.unmount(); f.timer.mockClear(); finished(true)
  expect(f.timer.mock.calls.filter(([, delay]) => delay === 0)).toHaveLength(0)
})
test('Escape cancels a managed touch wait', async () => {
  const f = fixture(); await f.press(); const callback = f.hold(); document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); callback()
  expect(f.startCount()).toBe(0)
})
test('window blur cancels a managed touch wait', async () => {
  const f = fixture(); await f.press(); const callback = f.hold(); window.dispatchEvent(new Event('blur')); callback()
  expect(f.startCount()).toBe(0)
})
test('current managed finish suppresses click until the zero-delay settlement', async () => {
  const f = fixture(); await f.press('mouse')
  const finished = f.card.emitted('pointer-start')![0][2] as (moved: boolean) => void
  finished(true); await f.card.get('button').trigger('click'); expect(f.card.emitted('select') ?? []).toHaveLength(0)
  vi.advanceTimersByTime(0); await f.card.get('button').trigger('click'); expect(f.card.emitted('select') ?? []).toHaveLength(1)
})
test('a finished callback is accepted once, including repeated completion', async () => {
  const f = fixture(); await f.press('mouse')
  const finished = f.card.emitted('pointer-start')![0][2] as (moved: boolean) => void
  f.timer.mockClear(); finished(true); finished(false)
  expect(f.timer.mock.calls.filter(([, delay]) => delay === 0)).toHaveLength(1)
  await f.card.get('button').trigger('click'); expect(f.card.emitted('select') ?? []).toHaveLength(0)
})
test('old unlock cannot release a new managed finish', async () => {
  const f = fixture(); await f.press('mouse')
  ;(f.card.emitted('pointer-start')![0][2] as (moved: boolean) => void)(true)
  const old = f.timer.mock.calls.filter(([, delay]) => delay === 0).at(-1)![0] as () => void
  await f.press('mouse'); (f.card.emitted('pointer-start')![1][2] as (moved: boolean) => void)(true); old()
  await f.card.get('button').trigger('click'); expect(f.card.emitted('select') ?? []).toHaveLength(0)
})
test('reactivation rejects old hold but accepts a fresh hold', async () => {
  const f = fixture(); await f.press(); const old = f.hold(); f.active.value = false; await nextTick()
  f.active.value = true; await nextTick(); await f.press(); old(); expect(f.startCount()).toBe(0)
  vi.advanceTimersByTime(350); expect(f.startCount()).toBe(1)
})
