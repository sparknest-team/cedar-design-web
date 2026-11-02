import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import FilterForm from '..'
const Control = defineComponent({
  props: ['modelValue'], emits: ['update:modelValue'],
  setup(props, { emit }) { return () => h('input', { value: props.modelValue, onInput: (event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).value) }) },
})
const fields = [{ component: Control, field: 'query' }]
const owners: ReturnType<typeof mount>[] = []
const previousMatchMedia = globalThis.matchMedia
beforeEach(() => {
  vi.useFakeTimers()
  vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }))
})
afterEach(() => { owners.splice(0).forEach(owner => owner.unmount()); vi.useRealTimers(); vi.stubGlobal('matchMedia', previousMatchMedia) })
function fixture(props = {}) {
  const owner = mount(FilterForm, { props: { fields, cols: 1, collapsible: false, changeDebounce: 150, ...props } })
  owners.push(owner); return owner
}
test('Enter publishes the current snapshot once and cancels its delayed duplicate', async () => {
  const owner = fixture()
  await owner.get('input').setValue('typed')
  await owner.get('input').trigger('keyup', { key: 'Enter' })
  vi.advanceTimersByTime(200); await nextTick()
  expect(owner.emitted('change')).toEqual([[{ query: 'typed' }, 'query']])
})
test('external model replacement cancels a stale snapshot', async () => {
  const owner = fixture({ modelValue: { query: '' } })
  await owner.get('input').setValue('stale')
  await owner.setProps({ modelValue: { query: 'reset' } })
  vi.advanceTimersByTime(200); await nextTick()
  expect(owner.emitted('change')).toBeUndefined()
})
test('changing the delay reschedules the pending snapshot under the new delay', async () => {
  const owner = fixture()
  await owner.get('input').setValue('latest')
  await owner.setProps({ changeDebounce: 0 })
  vi.advanceTimersByTime(0); await nextTick()
  expect(owner.emitted('change')).toEqual([[{ query: 'latest' }, 'query']])
  vi.advanceTimersByTime(200)
  expect(owner.emitted('change')).toHaveLength(1)
})
test('accepting an update:modelValue echo does not cancel its change notification', async () => {
  const model = ref({ query: '' }), change = vi.fn()
  const owner = mount({ setup: () => () => h(FilterForm, { fields, cols: 1, collapsible: false, changeDebounce: 150, modelValue: model.value, 'onUpdate:modelValue': (value: any) => { model.value = value }, onChange: change }) })
  owners.push(owner)
  await owner.get('input').setValue('accepted'); await nextTick()
  vi.advanceTimersByTime(200); await nextTick()
  expect(change).toHaveBeenCalledTimes(1)
  expect(change).toHaveBeenCalledWith({ query: 'accepted' }, 'query')
})
test('deactivation cancels pending changes and a fresh activation accepts new work', async () => {
  const show = ref(true), change = vi.fn()
  const owner = mount({ setup: () => () => h(KeepAlive, null, { default: () => show.value ? h(FilterForm, { fields, cols: 1, collapsible: false, changeDebounce: 150, onChange: change }) : null }) })
  owners.push(owner)
  await owner.get('input').setValue('hidden')
  show.value = false; await nextTick(); vi.advanceTimersByTime(200); await nextTick()
  expect(change).not.toHaveBeenCalled()
  show.value = true; await nextTick(); await owner.get('input').setValue('visible')
  vi.advanceTimersByTime(200); await nextTick()
  expect(change).toHaveBeenCalledTimes(1)
  expect(change).toHaveBeenCalledWith({ query: 'visible' }, 'query')
})

test('unmount cancels the owned change timer even though Vue would ignore a late emit', async () => {
  const schedule = vi.spyOn(globalThis, 'setTimeout'), cancel = vi.spyOn(globalThis, 'clearTimeout')
  const owner = fixture()
  await owner.get('input').setValue('leaving')
  const index = schedule.mock.calls.findIndex(([, delay]) => delay === 150)
  expect(index).toBeGreaterThanOrEqual(0)
  const handle = schedule.mock.results[index].value
  owner.unmount(); owners.splice(owners.indexOf(owner), 1)
  expect(cancel).toHaveBeenCalledWith(handle)
  schedule.mockRestore(); cancel.mockRestore()
})
test('an already delivered older timer cannot publish or consume a newer pending snapshot', async () => {
  const schedule = vi.spyOn(globalThis, 'setTimeout'), owner = fixture()
  await owner.get('input').setValue('old')
  const old = schedule.mock.calls.find(([, delay]) => delay === 150)![0] as () => void
  await owner.get('input').setValue('new')
  old()
  expect(owner.emitted('change')).toBeUndefined()
  vi.advanceTimersByTime(200)
  expect(owner.emitted('change')).toEqual([[{ query: 'new' }, 'query']])
  schedule.mockRestore()
})
