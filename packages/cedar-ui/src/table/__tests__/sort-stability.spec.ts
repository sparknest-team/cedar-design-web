import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '../table'

const data = [
  { key: 'a', name: 'first', score: 2 },
  { key: 'b', name: 'second', score: 1 },
  { key: 'c', name: 'third', score: 1 },
  { key: 'd', name: 'fourth', score: 3 },
]

test.each([
  ['ascend', ['second', 'third', 'first', 'fourth']],
  ['descend', ['fourth', 'first', 'second', 'third']],
] as const)('built-in %s sort preserves the input order of equal values', (direction, expected) => {
  const wrapper = mount(Table, { props: { data, pagination: false, columns: [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Score', dataIndex: 'score', sortable: { defaultSortOrder: direction, sortDirections: ['ascend', 'descend'] } },
  ] } })
  try {
    expect(wrapper.findAll('tbody tr').map(row => row.findAll('td')[0].text())).toEqual(expected)
  } finally { wrapper.unmount() }
})
