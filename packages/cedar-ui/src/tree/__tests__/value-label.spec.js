import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Tree from '..'

test('value/label and separate state collections preserve numeric zero and return business data', async () => {
  const data = [{ value: 0, label: 'Parent', children: [{ value: 'leaf', label: 'Leaf' }] }]
  const wrapper = mount(Tree, { props: { data, checkable: true, defaultExpandAll: false, animation: false } })
  try {
    expect(wrapper.text()).toContain('Parent')
    expect(wrapper.text()).not.toContain('Leaf')
    wrapper.vm.selectNode(0)
    expect(wrapper.emitted('update:selectedValues')).toEqual([[ [0] ]])
    expect(wrapper.emitted('select')[0][1].node).toEqual(data[0])
    wrapper.vm.expandNode(0)
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Leaf')
    expect(wrapper.emitted('update:expandedValues')).toEqual([[ [0] ]])
    wrapper.vm.checkNode('leaf')
    expect(wrapper.emitted('update:checkedValues').at(-1)[0]).toEqual(expect.arrayContaining([0, 'leaf']))
    expect(wrapper.vm.getCheckedNodes()).toHaveLength(2)
    expect(wrapper.emitted('update:selectedKeys')).toBeUndefined()
  } finally { wrapper.unmount() }
})

test('fieldNames maps business id/text and search redraws do not change node identity', async () => {
  const data = [{ id: 0, text: 'Zero' }, { id: 'other', text: 'Other' }]
  const wrapper = mount(Tree, {
    props: { data, fieldNames: { value: 'id', label: 'text' }, selectedValues: [0] },
  })
  try {
    expect(wrapper.text()).toContain('Zero')
    await wrapper.setProps({ searchValue: 'changed' })
    const label = wrapper.findAll('span').find((span) => span.classes().includes('c-tree-node-title-text') && span.text() === 'Zero')
    await label.trigger('click')
    expect(wrapper.emitted('select').at(-1)[0]).toEqual([0])
    expect(wrapper.emitted('select').at(-1)[1].node).toEqual(data[0])
  } finally { wrapper.unmount() }
})
