import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Tree from '..'
import TreeNode from '../node'

for (const virtual of [false, true]) {
  test(`Tree keeps key=value and row instances while reordering (virtual=${virtual})`, async () => {
    const data = [{ value: 0, label: 'Zero' }, { value: 'one', label: 'One' }]
    const wrapper = mount(Tree, { props: { data, virtualListProps: virtual ? { height: 200, estimatedSize: 30, fixedSize: true } : undefined } })
    try {
      await wrapper.vm.$nextTick()
      const rows = () => wrapper.findAllComponents(TreeNode)
      const identities = new Map(rows().map(row => [row.props('value'), row.vm.$.uid]))
      expect(identities.size).toBe(2)
      expect(wrapper.vm.treeContext.key2TreeNode.get(0).key).toBe(0)
      await wrapper.setProps({ data: [{ ...data[1] }, { ...data[0], label: 'Updated zero' }], searchValue: 'changed' })
      for (const row of rows()) expect(row.vm.$.uid).toBe(identities.get(row.props('value')))
      expect(wrapper.text()).toContain('Updated zero')
      wrapper.vm.selectNode(0)
      expect(wrapper.emitted('select').at(-1)[0]).toEqual([0])
    } finally { wrapper.unmount() }
  })
}
