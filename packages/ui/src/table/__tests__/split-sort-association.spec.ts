import { mount, flushPromises } from '@vue/test-utils'
import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { expect, test } from 'vitest'
import Table from '../table'

const data = [{ key: 'a', name: 'Ada' }, { key: 'b', name: 'Bob' }]
const columns = [{ title: 'Name', dataIndex: 'name', sortable: { defaultSortOrder: 'ascend', sortDirections: ['ascend', 'descend'] } }]

for (const virtual of [false, true]) {
  test(`split ${virtual ? 'virtual' : 'fixed'} table exposes the active sort on its associated headers`, async () => {
    const wrapper = mount(Table, { props: {
      columns, data, pagination: false, height: 200, summary: true,
      ...(virtual ? { virtualListProps: { height: 200, estimatedSize: 40 } } : {}),
    } })
    const associatedHeader = (cell: HTMLTableCellElement) => {
      const id = cell.headers.split(/\s+/).filter(Boolean)[0]
      return Array.from(cell.closest('table')!.querySelectorAll('thead th')).find(header => header.id === id)!
    }
    try {
      const expectSort = (value: string | null) => {
        const body = wrapper.get('tbody td').element as HTMLTableCellElement
        const summary = wrapper.get('tfoot td').element as HTMLTableCellElement
        expect(associatedHeader(body).getAttribute('aria-sort')).toBe(value)
        expect(associatedHeader(summary).getAttribute('aria-sort')).toBeNull()
      }
      expectSort('ascending')
      await wrapper.get('.c-table-cell-with-sorter').trigger('click')
      await flushPromises()
      expectSort('descending')
      await wrapper.get('.c-table-cell-with-sorter').trigger('click')
      await flushPromises()
      expectSort(null)
    } finally {
      wrapper.unmount()
    }
  })
}

test('controlled sorting stays associated with the business column when an extra column shares its key', async () => {
  const controlled = (sortOrder: 'ascend' | 'descend') => [{ title: 'Name', dataIndex: 'name', sortable: { sortOrder, sortDirections: ['ascend', 'descend'] } }]
  const wrapper = mount(Table, { props: {
    columns: controlled('ascend'), data, pagination: false, height: 200, extraColumn: { dataIndex: 'name' },
  } })
  const orders = () => wrapper.findAll('tbody tr').at(0)!.findAll('td').map(cell => {
    const element = cell.element as HTMLTableCellElement
    const id = element.headers.split(/\s+/).filter(Boolean)[0]
    return Array.from(element.closest('table')!.querySelectorAll('thead th')).find(header => header.id === id)?.getAttribute('aria-sort') ?? null
  })
  try {
    expect(orders().filter(value => value === 'ascending')).toHaveLength(1)
    expect(orders().filter(value => value === null)).toHaveLength(1)
    await wrapper.get('.c-table-cell-with-sorter').trigger('click')
    await flushPromises()
    expect(orders().filter(value => value === 'ascending')).toHaveLength(1)
    await wrapper.setProps({ columns: controlled('descend') })
    expect(orders().filter(value => value === 'descending')).toHaveLength(1)
    expect(orders().filter(value => value === null)).toHaveLength(1)
  } finally {
    wrapper.unmount()
  }
})

test('SSR exposes body sort without claiming that separately supplied summary rows are sorted', async () => {
  const app = createSSRApp({ render: () => h(Table, {
    columns, data, pagination: false, height: 200,
    summary: () => [{ key: 'z', name: 'Z total' }, { key: 'a', name: 'A total' }],
  }) })
  const host = document.createElement('div')
  host.innerHTML = await renderToString(app)
  const headerFor = (selector: string) => {
    const cell = host.querySelector(selector) as HTMLTableCellElement
    const id = cell.headers.split(/\s+/).filter(Boolean)[0]
    return Array.from(cell.closest('table')!.querySelectorAll('thead th')).find(header => header.id === id)!
  }
  expect(headerFor('tbody td').getAttribute('aria-sort')).toBe('ascending')
  expect(headerFor('tfoot td').getAttribute('aria-sort')).toBeNull()
  expect(Array.from(host.querySelectorAll('tfoot tr')).map(row => row.textContent?.trim())).toEqual(['Z total', 'A total'])
})
