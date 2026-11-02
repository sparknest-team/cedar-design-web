import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import { toRaw } from 'vue'
import Table, { defineTableConfig, type TypedTableColumn } from '..'
interface User { id: string; name: string; age: number; profile: { city: string }; tags: { label: string }[]; children?: User[]; isLeaf?: boolean }
const user = (id: string, name: string, age: number): User => ({ id, name, age, profile: { city: `${name} City` }, tags: [{ label: `${name} Tag` }] })
const owners: ReturnType<typeof mount>[] = []
afterEach(() => owners.splice(0).forEach(owner => owner.unmount()))
function mountTable(props: Parameters<typeof mount>[1]) {
  const owner = mount(Table, { attachTo: document.body, ...props })
  owners.push(owner)
  return owner
}
test('typed grouped columns render original business records and nested/array paths', async () => {
  const rows = [user('a', 'Alice', 28)]
  const render = vi.fn(({ record }: { record: User }) => record.name.toUpperCase())
  const config = { rowKey: 'id' as const, data: rows, pagination: false as const, columns: [{ title: 'Group', children: [
    { title: 'Name', dataIndex: 'name' as const, render },
    { title: 'City', dataIndex: 'profile.city' as const },
    { title: 'Tag', dataIndex: 'tags[0].label' as const },
  ] }] }
  const owner = mountTable({ props: defineTableConfig<User>(config) })
  await flushPromises()
  expect(owner.get('tbody').text()).toContain('ALICE')
  expect(owner.get('tbody').text()).toContain('Alice City')
  expect(owner.get('tbody').text()).toContain('Alice Tag')
  expect(toRaw(render.mock.calls[0][0].record)).toBe(rows[0])
  expect(owner.findAll('thead th').map(cell => cell.text())).toContain('Group')
})
test('typed comparator sorts actual rows without reordering the caller data array', async () => {
  const rows = [user('a', 'Alice', 28), user('b', 'Bob', 16)]
  const sorter = vi.fn((a: User, b: User) => a.age - b.age)
  const owner = mountTable({ props: defineTableConfig<User>({ rowKey: 'id', data: rows, pagination: false,
    columns: [{ dataIndex: 'name' }, { title: 'Age', dataIndex: 'age', sortable: { sortDirections: ['ascend', 'descend'], sorter } }],
  }) })
  await owner.get('.c-table-cell-with-sorter').trigger('click')
  await flushPromises()
  expect(owner.findAll('tbody tr').map(row => row.findAll('td')[0].text())).toEqual(['Bob', 'Alice'])
  expect(rows.map(row => row.name)).toEqual(['Alice', 'Bob'])
  expect(sorter.mock.calls.some(([a, b]) => rows.includes(toRaw(a)) && rows.includes(toRaw(b)))).toBe(true)
  expect(owner.emitted('sorter-change')).toEqual([['age', 'ascend']])
})
test('typed filtering still uses the original filter menu and business-row predicate', async () => {
  const rows = [user('a', 'Alice', 28), user('b', 'Bob', 16)]
  const filter = vi.fn((values: string[], row: User) => !values.includes('adult') || row.age >= 18)
  const owner = mountTable({ props: defineTableConfig<User>({ rowKey: 'id', data: rows, pagination: false,
    columns: [{ dataIndex: 'name' }, { title: 'Age', dataIndex: 'age', filterable: { multiple: true, filters: [{ text: 'Adult', value: 'adult' }], filter } }],
  }) })
  await owner.get('.c-table-filters').trigger('click')
  await flushPromises()
  document.querySelector<HTMLInputElement>('.c-table-filters-content input[type="checkbox"]')!.click()
  await flushPromises()
  Array.from(document.querySelectorAll<HTMLButtonElement>('.c-table-filters-bottom button')).find(button => /确定|Confirm/.test(button.textContent ?? ''))!.click()
  await flushPromises()
  expect(owner.findAll('tbody tr')).toHaveLength(1)
  expect(owner.get('tbody').text()).toContain('Alice')
  expect(filter.mock.calls.some(([, row]) => toRaw(row) === rows[0])).toBe(true)
  expect(owner.emitted('filter-change')).toEqual([['age', ['adult']]])
})
test('typed lazy loading retains the existing done(children) protocol', async () => {
  const parent = user('a', 'Parent', 30)
  const child = { ...user('b', 'Child', 10), isLeaf: true }
  let done: (rows?: User[]) => void = () => {}
  const loadMore = vi.fn((_row: User, finish: (rows?: User[]) => void) => { done = finish })
  const owner = mountTable({ props: defineTableConfig<User>({ rowKey: 'id', data: [parent], pagination: false,
    columns: [{ dataIndex: 'name' }], loadMore,
  }) })
  await owner.get('button[aria-label="切换展开状态"]').trigger('click')
  expect(toRaw(loadMore.mock.calls[0][0])).toBe(parent)
  done([child])
  await flushPromises()
  expect(owner.get('tbody').text()).toContain('Child')
})
test('typed tree rows and custom complete-row summaries reach the original renderer', async () => {
  const parent = { ...user('a', 'Parent', 30), children: [{ ...user('b', 'Child', 10), isLeaf: true }] }
  const summary = user('total', 'Total', 40)
  const columns: TypedTableColumn<User>[] = [{ dataIndex: 'name', render: ({ record }) => record.name.toUpperCase() }, { dataIndex: 'age' }]
  const owner = mountTable({ props: defineTableConfig<User>({ rowKey: 'id', data: [parent], columns, pagination: false,
    defaultExpandAllRows: true, summary: () => [summary],
  }) })
  await flushPromises()
  expect(owner.text()).toContain('PARENT')
  expect(owner.text()).toContain('CHILD')
  expect(owner.text()).toContain('TOTAL')
})
test('legacy dynamic paths and automatic summaries remain accepted and rendered', async () => {
  const owner = mountTable({ props: { rowKey: 'id', data: [user('a', 'Alice', 20), user('b', 'Bob', 30)],
    columns: [{ dataIndex: 'profile.city' }, { dataIndex: 'age' }], summary: true, pagination: false,
  } })
  await flushPromises()
  expect(owner.text()).toContain('Alice City')
  expect(owner.find('.c-table-tr-summary').text()).toContain('50')
})
