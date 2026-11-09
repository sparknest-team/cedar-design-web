import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Tree from '../Tree.vue'

const data = [{ value: 'root', label: 'Root', children: [
  { value: 'branch', label: 'Branch', children: [{ value: 'leaf', label: 'Needle' }] },
  { value: 'other', label: 'Other' },
] }]
const keys = (owner: ReturnType<typeof mount>) => owner.findAll('[role=treeitem]').map(item => item.attributes('data-key'))

test('searchValue matches labels and retains ancestors without changing expansion state', async () => {
  const owner = mount(Tree, { props: { data, animation: false, searchValue: 'needle' } })
  try {
    await flushPromises()
    expect(keys(owner)).toEqual(['root', 'branch', 'leaf'])
    await owner.setProps({ searchValue: '' })
    expect(keys(owner)).toEqual(['root', 'branch', 'leaf', 'other'])
    expect(owner.emitted('update:expandedValues')).toBeUndefined()
  } finally { owner.unmount() }
})

test('filterTreeNode keeps ancestors, and collapsed branches stay collapsed', async () => {
  const owner = mount(Tree, { props: { data, animation: false, defaultExpandAll: false, filterTreeNode: node => node.value === 'leaf' } })
  try {
    await flushPromises()
    expect(keys(owner)).toEqual(['root'])
    await owner.setProps({ expandedValues: ['root', 'branch'] })
    expect(keys(owner)).toEqual(['root', 'branch', 'leaf'])
  } finally { owner.unmount() }
})

test('search uses mapped label and composes with a custom predicate', async () => {
  const owner = mount(Tree, { props: { animation: false, fieldNames: { value: 'id', label: 'name', children: 'nodes' },
    data: [{ id: 0, name: 'Parent', nodes: [{ id: 1, name: 'Match One' }, { id: 2, name: 'Match Two' }] }],
    searchValue: 'match', filterTreeNode: node => node.id === 2,
  } })
  try { await flushPromises(); expect(keys(owner)).toEqual(['0', '2']) } finally { owner.unmount() }
})
