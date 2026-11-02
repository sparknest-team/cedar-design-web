import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import PeopleSelect from '..'
import Select from '../../select'

const owners: ReturnType<typeof mount>[] = []
afterEach(() => owners.splice(0).forEach((owner) => owner.unmount()))
function setup(props: Record<string, unknown> = {}) {
  const owner = mount(PeopleSelect, { props })
  owners.push(owner)
  return { owner, field: () => owner.getComponent(Select) }
}
test('options are owned by the caller and mounting or changing an ID makes no request', async () => {
  const options = Object.freeze([Object.freeze({ value: 'a', label: 'Alice', mobile: '123' })])
  const { owner, field } = setup({ options, modelValue: 'a' })
  await flushPromises()
  expect(field().props('options')).toEqual(options)
  expect(field().props('options')[0]).not.toBe(options[0])
  expect(owner.text()).toContain('Alice')
  await owner.setProps({ modelValue: 'missing' })
  await flushPromises()
  expect(owner.text()).toContain('missing')
  expect(owner.emitted('update:modelValue')).toBeUndefined()
  expect('fetch' in (PeopleSelect as any).props).toBe(false)
  expect('urlType' in (PeopleSelect as any).props).toBe(false)
})
test('search is forwarded once; candidates and loading only follow external props', async () => {
  const onSearch = vi.fn()
  const { owner, field } = setup({
    options: [{ value: 'a', label: 'Alice' }],
    onSearch,
  })
  field().vm.$emit('search', 'ali')
  await flushPromises()
  expect(onSearch).toHaveBeenCalledTimes(1)
  expect(owner.emitted('search')).toEqual([['ali']])
  expect(field().props('loading')).toBe(false)
  await owner.setProps({ options: [], loading: true })
  expect(field().props('loading')).toBe(true)
  field().vm.$emit('change', 'a')
  expect(owner.emitted('change')).toBeUndefined()
  await owner.setProps({
    options: [{ value: 'b', label: 'Bob' }],
    loading: false,
  })
  expect(field().props('options')).toEqual([{ value: 'b', label: 'Bob' }])
})
test('default value initializes once, selection and clear keep the string value contract', async () => {
  const { owner, field } = setup({
    defaultValue: 'a',
    options: [{ value: 'a', label: 'Alice' }],
    clearable: true,
  })
  expect(field().props('modelValue')).toBe('a')
  await owner.setProps({ defaultValue: 'b' })
  expect(field().props('modelValue')).toBe('a')
  field().vm.$emit('change', 'b')
  await flushPromises()
  expect(field().props('modelValue')).toBe('b')
  field().vm.$emit('change', undefined)
  field().vm.$emit('clear')
  await flushPromises()
  expect(owner.emitted('update:modelValue')).toEqual([['b'], ['']])
  expect(owner.emitted('clear')).toHaveLength(1)
})
test('options label and explicit echo label work in label/readPretty/click modes without adding candidates', async () => {
  const { owner } = setup({
    modelValue: 'a',
    isLabel: true,
    options: [{ value: 'a', label: 'Alice' }],
  })
  expect(owner.text()).toBe('Alice')
  await owner.setProps({ options: [], label: 'Echo only' })
  expect(owner.text()).toBe('Echo only')
  await owner.setProps({ isLabel: false, readPretty: true })
  expect(owner.text()).toContain('Echo only')
  await owner.setProps({
    readPretty: false,
    editMode: 'click',
    options: [{ value: 'a', label: 'Alice' }],
  })
  expect(owner.text()).toContain('Alice')
})
for (const restriction of ['disabled', 'readonly']) {
  test(`${restriction} prevents changes, clearing and searches`, async () => {
    const { owner, field } = setup({ [restriction]: true })
    field().vm.$emit('change', 'b')
    field().vm.$emit('clear')
    field().vm.$emit('search', 'b')
    expect(owner.emitted('change')).toBeUndefined()
    expect(owner.emitted('clear')).toBeUndefined()
    expect(owner.emitted('search')).toBeUndefined()
  })
}

test('PeopleSelect forwards caseSensitive and filtering without changing identity or options', async () => {
  const options = [{ value: 'USER_A', label: 'Apple' }]
  const { owner, field } = setup({ options, modelValue: 'USER_A' })
  expect(field().props('caseSensitive')).toBe(false)
  await owner.setProps({ caseSensitive: true })
  expect(field().props('caseSensitive')).toBe(true)
  expect(field().props('modelValue')).toBe('USER_A')
  expect(owner.emitted('update:modelValue')).toBeUndefined()
  const filterOption = (query: string, person: any) =>
    [person.value, person.label].some((text) => text.toLowerCase().includes(query.toLowerCase()))
  await owner.setProps({ filterOption })
  expect(field().props('filterOption')('apple', options[0])).toBe(true)
  expect(field().props('filterOption')('user', options[0])).toBe(true)
})
