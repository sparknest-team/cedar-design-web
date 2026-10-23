import { afterEach, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import SchedulerEvent from '../components/SchedulerEvent.vue'

const owners: Array<ReturnType<typeof mount>> = []
afterEach(() => { owners.splice(0).forEach((owner) => owner.unmount()); vi.restoreAllMocks() })
function fixture() {
  const active = ref(true), resizable = ref(true), managed = ref(false)
  const item = ref({ id: 'a', title: 'event', start: '2026-10-16', end: '2026-10-17', readonly: false, milestone: false })
  const owner = mount(defineComponent({ setup: () => () => h(KeepAlive, null, { default: () => active.value ? h(SchedulerEvent, {
    event: item.value, resizable: resizable.value, managedPointer: managed.value,
  }) : null }) }))
  owners.push(owner)
  const card = owner.getComponent(SchedulerEvent)
  const transfer = { effectAllowed: '', setData: vi.fn() }
  const start = () => card.trigger('dragstart', { dataTransfer: transfer })
  const end = () => card.trigger('dragend')
  const count = (name: string) => card.emitted(name)?.length ?? 0
  return { owner, card, active, resizable, managed, item, transfer, start, end, count }
}
test('current drag protocol starts and ends normally', async () => {
  const f = fixture(); await f.start(); await f.end()
  expect(f.transfer.setData).toHaveBeenCalledWith('text/plain', 'a'); expect(f.count('drag-start')).toBe(1); expect(f.count('drag-end')).toBe(1)
})
test('readonly event remains selectable while not editable', async () => {
  const f = fixture(); f.item.value.readonly = true; await nextTick(); await f.card.get('button').trigger('click')
  expect(f.count('select')).toBe(1)
})
test('inactive retained button click cannot select', async () => {
  const f = fixture(); const button = f.card.get('button'); f.active.value = false; await nextTick(); await button.trigger('click')
  expect(f.count('select')).toBe(0)
})
test('inactive retained dragstart cannot publish or write transfer data', async () => {
  const f = fixture(); f.active.value = false; await nextTick(); await f.start()
  expect(f.count('drag-start')).toBe(0); expect(f.transfer.setData).not.toHaveBeenCalled()
})
test('dragend consumes the current native protocol once', async () => {
  const f = fixture(); await f.start(); await f.end(); await f.end()
  expect(f.count('drag-end')).toBe(1)
})
test('orphan native dragend cannot end an unrelated pointer gesture', async () => {
  const f = fixture(); await f.end(); expect(f.count('drag-end')).toBe(0)
})
test('transfer callback readonly reentry prevents drag-start notification', async () => {
  const f = fixture(); f.transfer.setData.mockImplementation(() => { f.item.value.readonly = true }); await f.start()
  expect(f.count('drag-start')).toBe(0)
})
test('retained resize pointer callback respects removed resizable prop', async () => {
  const f = fixture(); f.managed.value = true; await nextTick(); const resize = f.card.get('.c-scheduler__resize')
  f.resizable.value = false; await nextTick(); await resize.trigger('pointerdown', { button: 0, pointerType: 'mouse' })
  expect(f.count('pointer-start')).toBe(0)
})
test('retained resize drag callback respects a newly marked milestone', async () => {
  const f = fixture(); const resize = f.card.get('.c-scheduler__resize'); f.item.value.milestone = true; await nextTick()
  await resize.trigger('dragstart', { dataTransfer: f.transfer }); expect(f.count('drag-start')).toBe(0)
})
test('deactivation ends an active native protocol and rejects late dragend', async () => {
  const f = fixture(); await f.start(); f.active.value = false; await nextTick()
  expect(f.count('drag-end')).toBe(1); await f.end(); expect(f.count('drag-end')).toBe(1)
})
test('old native end callback cannot terminate a replacement protocol', async () => {
  const f = fixture(); await f.start()
  const old = f.card.vm.$.subTree.props!.onDragend as () => void
  await f.start(); expect(f.count('drag-end')).toBe(1); old(); expect(f.count('drag-end')).toBe(1)
  await f.end(); expect(f.count('drag-end')).toBe(2)
})
test('activation allows a new native protocol without restoring the old one', async () => {
  const f = fixture(); await f.start(); f.active.value = false; await nextTick(); f.active.value = true; await nextTick()
  await f.end(); expect(f.count('drag-end')).toBe(1); await f.start(); await f.end(); expect(f.count('drag-end')).toBe(2)
})
test('native resize preserves the start-edge direction for an eligible handle', async () => {
  const f = fixture(); await f.card.get('.c-scheduler__resize--start').trigger('dragstart', { dataTransfer: f.transfer })
  expect(f.card.emitted('drag-start')![0][1]).toBe('start'); await f.end(); expect(f.count('drag-end')).toBe(1)
})
