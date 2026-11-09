import { defineComponent, h, nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import FilterForm from '..'

const Control = defineComponent({
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup:
    (props, { emit }) =>
    () =>
      h('input', {
        value: props.modelValue,
        onInput: (event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).value),
      }),
})
const fields = [{ component: Control, field: 'query' }]
const owners: ReturnType<typeof mount>[] = []
const matchMedia = globalThis.matchMedia
beforeEach(() => {
  vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }))
})
afterEach(() => {
  owners.splice(0).forEach((owner) => owner.unmount())
  vi.useRealTimers()
  vi.stubGlobal('matchMedia', matchMedia)
})
function fixture(props: Record<string, unknown> = {}) {
  const owner = mount(FilterForm, { props: { fields, cols: 1, collapsible: false, changeDebounce: 0, ...props } })
  owners.push(owner)
  return owner
}
function firstModel(owner: ReturnType<typeof mount>) {
  expect(owner.emitted('update:modelValue')).toHaveLength(1)
  return owner.emitted('update:modelValue')![0][0] as Record<string, unknown>
}

test('editing another field preserves reactive Date and isolates emitted snapshots', async () => {
  const date = new Date(2026, 10, 4, 10, 30),
    time = date.getTime()
  const source = reactive({ query: '', when: date, nested: { values: [date] } })
  const owner = fixture({ modelValue: source })
  await owner.get('input').setValue('first')
  const first = firstModel(owner)
  expect(first.when).toBeInstanceOf(Date)
  expect((first.when as Date).getTime()).toBe(time)
  expect(first.when).not.toBe(date)
  expect((first.nested as { values: Date[] }).values[0]).toBeInstanceOf(Date)
  ;(first.when as Date).setFullYear(2000)
  await owner.get('input').setValue('second')
  const second = owner.emitted('update:modelValue')![1][0] as { when: Date }
  expect(second.when.getTime()).toBe(time)
  expect(source.when.getTime()).toBe(time)
  expect(source.query).toBe('')
})

test('Map and Set values retain their data kinds through reactive model snapshots', async () => {
  const date = new Date(2026, 10, 4)
  const owner = fixture({ modelValue: reactive({ query: '', map: new Map([['when', date]]), set: new Set(['a']) }) })
  await owner.get('input').setValue('typed')
  const model = firstModel(owner)
  expect(model.map).toBeInstanceOf(Map)
  expect((model.map as Map<string, Date>).get('when')?.getTime()).toBe(date.getTime())
  expect(model.set).toBeInstanceOf(Set)
  expect([...(model.set as Set<string>)]).toEqual(['a'])
})

test('BigInt and cyclic records survive model snapshots rather than JSON conversion', async () => {
  const source = reactive<Record<string, unknown>>({ query: '', integer: BigInt(13) })
  source.self = source
  const owner = fixture({ modelValue: source })
  await owner.get('input').setValue('typed')
  const model = firstModel(owner)
  expect(model.integer).toBe(BigInt(13))
  expect(model.self).toBe(model)
  expect(model).not.toBe(source)
})

test('a controlled Date echo preserves the owned debounced change snapshot', async () => {
  vi.useFakeTimers()
  const date = new Date(2026, 10, 4),
    model = ref<Record<string, unknown>>({ query: '', when: date }),
    change = vi.fn()
  const owner = mount({
    setup: () => () =>
      h(FilterForm, {
        fields,
        cols: 1,
        collapsible: false,
        changeDebounce: 20,
        modelValue: model.value,
        'onUpdate:modelValue': (value: Record<string, unknown>) => {
          model.value = value
        },
        onChange: change,
      }),
  })
  owners.push(owner)
  await owner.get('input').setValue('typed')
  await nextTick()
  vi.advanceTimersByTime(30)
  await nextTick()
  expect(change).toHaveBeenCalledTimes(1)
  expect(change.mock.calls[0][0].when).toBeInstanceOf(Date)
  expect(model.value.when).toBeInstanceOf(Date)
})

test('missing nested paths create records without changing the parent model', async () => {
  const source = reactive({})
  const owner = fixture({ modelValue: source, fields: [{ component: Control, field: 'search.keyword' }] })
  await owner.get('input').setValue('nested')
  expect(firstModel(owner)).toEqual({ search: { keyword: 'nested' } })
  expect(owner.getComponent(Control).props('modelValue')).toBe('nested')
  expect(source).toEqual({})
  expect(owner.emitted('change')?.[0][1]).toBe('search.keyword')
})

test('path creation preserves sibling fields and prebuilt array containers', async () => {
  const owner = fixture({
    defaultValue: { search: { page: 2 }, rows: [] },
    fields: [
      { component: Control, field: 'search.keyword' },
      { component: Control, field: 'rows[0].name' },
    ],
  })
  await owner.findAll('input')[0].setValue('nested')
  await owner.findAll('input')[1].setValue('row')
  const model = owner.emitted('update:modelValue')![1][0]
  expect(model).toEqual({ search: { page: 2, keyword: 'nested' }, rows: [{ name: 'row' }] })
})
