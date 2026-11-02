import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
import TreeSelect from '..'
import Tree from '../../tree'
import Trigger from '../../trigger'
import type { TreeSelectTreeOptions, TreeSelectTriggerOptions } from '..'
const wrappers: ReturnType<typeof mount>[] = []
afterEach(() => { wrappers.splice(0).forEach(wrapper => wrapper.unmount()) })
test('TreeSelect: host owns data, selected set, mode and size; nested display options still work', async () => {
  const data = [{ value: 'a', label: 'Apple' }]
  const wrapper = mount(TreeSelect, { props: { defaultOpen: true, modelValue: 'a', data, size: 'md',
    treeProps: { data: [{ value: 'other', label: 'Other' }], selectedValues: ['other'], checkedValues: ['other'], multiple: true, size: 'xl', showLine: true } },
    global: { stubs: { Trigger: { template: '<div><slot/><slot name="content"/></div>' }, teleport: true } } })
  wrappers.push(wrapper)
  await flushPromises()
  const tree = wrapper.findComponent(Tree)
  expect(tree.props('data')).toEqual(data)
  expect(tree.props('selectedValues')).toEqual(['a'])
  expect(tree.props('checkedValues')).toEqual([])
  expect(tree.props('multiple')).toBe(false)
  expect(tree.props('size')).toBe('md')
  expect(tree.props('showLine')).toBe(true)
})
test('TreeSelect: trigger container has no nested fallback; host state wins', () => {
  const wrapper = mount(TreeSelect, { props: { open: false, readonly: true, popupContainer: false,
    triggerProps: { open: true, disabled: false, popupContainer: document.body, closeOnClickReference: false, placement: 'top-start' } }, global: { stubs: { teleport: true } } })
  wrappers.push(wrapper)
  const trigger = wrapper.findComponent(Trigger)
  expect(trigger.props('open')).toBe(false)
  expect(trigger.props('disabled')).toBe(true)
  expect(trigger.props('popupContainer')).toBe(false)
  expect(trigger.props('closeOnClickReference')).toBe(true)
  expect(trigger.props('placement')).toBe('top-start')
})
test('TreeSelect: opt-in tree and trigger types are usable without narrowing published props', () => {
  const treeProps: TreeSelectTreeOptions = { showLine: true, defaultExpandAll: false }
  const triggerProps: TreeSelectTriggerOptions = { placement: 'top-end', popupOffset: 8 }
  const wrapper = mount(TreeSelect, { props: { treeProps, triggerProps }, global: { stubs: { teleport: true } } })
  wrappers.push(wrapper)
  expect(wrapper.findComponent(Trigger).props('placement')).toBe('top-end')
  expect(wrapper.findComponent(Trigger).props('popupOffset')).toBe(8)
  expect(wrapper.findComponent(Trigger).props('popupContainer')).toBeUndefined()
})


test('TreeSelect renders top-level options and clicking a label commits and closes', async () => {
  const wrapper = mount(TreeSelect, {
    props: { defaultOpen: true, selectable: true, data: [{ value: 'design', label: 'Design' }] },
    global: { stubs: { Trigger: { template: '<div><slot/><slot name="content"/></div>' }, teleport: true } },
  })
  wrappers.push(wrapper)
  await flushPromises()
  await wrapper.get('[role="treeitem"]').trigger('click')
  await flushPromises()
  expect(wrapper.emitted('update:modelValue')?.at(-1)?.[0]).toBe('design')
  expect(wrapper.get('input[role="combobox"]').attributes('aria-expanded')).toBe('false')
})
