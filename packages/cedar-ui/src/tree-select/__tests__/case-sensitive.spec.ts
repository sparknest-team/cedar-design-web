import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import TreeSelect from '..'
const owners: ReturnType<typeof mount>[] = []
afterEach(() => { owners.splice(0).forEach(owner => owner.unmount()); vi.useRealTimers() })
async function setup(extra: Record<string, unknown> = {}) {
  vi.useFakeTimers()
  const owner = mount(TreeSelect, { props: { filterable: true, defaultOpen: true, caseSensitive: true, searchFields: ['value'], data: [{ value: 'USER_A', label: 'Apple' }, { value: 0, label: 'Zero' }], ...extra }, global: { stubs: { Trigger: { template: '<div><slot/><slot name="content"/></div>' }, CTrigger: { template: '<div><slot/><slot name="content"/></div>' }, teleport: true } } })
  owners.push(owner)
  await flushPromises()
  const input = owner.get('input[role=combobox]')
  const search = async (query: string) => { await input.setValue(query); await flushPromises(); vi.advanceTimersByTime(150); await flushPromises() }
  return { owner, input, search }
}
test('TreeSelect retains case-sensitive value matching, not label matching, and keyboard uses the same candidates', async () => {
  const { owner, input, search } = await setup()
  await search('Apple'); expect(owner.findAll('[role=treeitem]')).toHaveLength(0)
  await search('user'); expect(owner.findAll('[role=treeitem]')).toHaveLength(0)
  await owner.setProps({ caseSensitive: false }); vi.advanceTimersByTime(150); await flushPromises()
  expect(owner.findAll('[role=treeitem]').map(item => item.text())).toEqual(['Apple'])
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(owner.emitted('update:modelValue')?.[0][0]).toBe('USER_A')
})
test('TreeSelect custom value OR label filtering takes priority, supports mapped fields and numeric zero', async () => {
  const filterTreeNode = (query: string, node: any) => [node.id, node.name].some(text => String(text ?? '').toLowerCase().includes(query.toLowerCase()))
  const { owner, search } = await setup({ data: [{ id: 0, name: 'Apple' }], fieldNames: { value: 'id', label: 'name' }, filterTreeNode, caseSensitive: true })
  await search('apple'); expect(owner.findAll('[role=treeitem]').map(item => item.text())).toEqual(['Apple'])
  await search('0'); expect(owner.findAll('[role=treeitem]')).toHaveLength(1)
  await owner.setProps({ disableFilter: true }); await search('not present')
  expect(owner.findAll('[role=treeitem]')).toHaveLength(1)
})

test('TreeSelect now defaults to case-insensitive label matching; both fields are configurable', async () => {
  const { owner, input, search } = await setup({ searchFields: undefined, caseSensitive: undefined })
  await search('apple'); expect(owner.findAll('[role=treeitem]').map(item => item.text())).toEqual(['Apple'])
  await search('user'); expect(owner.findAll('[role=treeitem]')).toHaveLength(0)
  await owner.setProps({ searchFields: ['value', 'label'] }); vi.advanceTimersByTime(150); await flushPromises()
  expect(owner.findAll('[role=treeitem]').map(item => item.text())).toEqual(['Apple'])
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(owner.emitted('update:modelValue')?.[0][0]).toBe('USER_A')
})

test('TreeSelect builtin searchFields follows fieldNames for both label and value including zero', async () => {
  const { owner, search } = await setup({ data: [{ id: 0, name: 'Zero' }], fieldNames: { value: 'id', label: 'name' }, searchFields: ['label', 'value'], caseSensitive: false })
  await search('zero'); expect(owner.findAll('[role=treeitem]').map(item => item.text())).toEqual(['Zero'])
  await search('0'); expect(owner.findAll('[role=treeitem]')).toHaveLength(1)
})
