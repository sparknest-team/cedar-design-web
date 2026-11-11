import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '../table'

const data = [
  { key: 'xr', kind: 'x', color: 'red' },
  { key: 'yr', kind: 'y', color: 'red' },
  { key: 'xb', kind: 'x', color: 'blue' },
  { key: 'yb', kind: 'y', color: 'blue' },
]
const columns = (controlled = false) => [
  { title: 'Kind', dataIndex: 'kind', filterable: { defaultFilteredValue: ['x'], filter: (values: string[], row: any) => values.includes(row.kind) } },
  { title: 'Color', dataIndex: 'color', filterable: { filters: [{ text: 'Red', value: 'red' }, { text: 'Blue', value: 'blue' }], defaultFilteredValue: [controlled ? 'blue' : 'red'], ...(controlled ? { filteredValue: ['red'] } : {}), filter: (values: string[], row: any) => values.includes(row.color) } },
]
const rows = (wrapper: any) => wrapper.findAll('tbody tr').map((row: any) => row.text())

test('clearing and resetting one filter preserve the other column and report consistent state', async () => {
  const wrapper = mount(Table, { props: { columns: columns(), data, pagination: false } })
  try {
    await flushPromises()
    expect(rows(wrapper)).toHaveLength(1)
    ;(wrapper.vm as any).clearFilters('kind')
    await flushPromises()
    expect(rows(wrapper)).toHaveLength(2)
    expect(rows(wrapper).every((row: string) => row.includes('red'))).toBe(true)
    expect(wrapper.emitted('filter-change')?.at(-1)).toEqual(['kind', []])
    expect((wrapper.emitted('change')?.at(-1)?.[1] as any).filters).toEqual({ kind: [], color: ['red'] })
    ;(wrapper.vm as any).resetFilters('kind')
    await flushPromises()
    expect(rows(wrapper)).toHaveLength(1)
    expect(rows(wrapper)[0]).toContain('red')
    expect((wrapper.emitted('change')?.at(-1)?.[1] as any).filters).toEqual({ kind: ['x'], color: ['red'] })
    ;(wrapper.vm as any).clearFilters('missing')
    await flushPromises()
    expect(rows(wrapper)).toHaveLength(1)
  } finally { wrapper.unmount() }
})

test('a targeted change does not replace another controlled column’s underlying default', async () => {
  const wrapper = mount(Table, { props: { columns: columns(true), data, pagination: false } })
  try {
    await flushPromises()
    ;(wrapper.vm as any).clearFilters(['kind'])
    await flushPromises()
    const next = columns(true)
    delete (next[1].filterable as any).filteredValue
    await wrapper.setProps({ columns: next })
    await flushPromises()
    expect(rows(wrapper)).toHaveLength(2)
    expect(rows(wrapper).every((row: string) => row.includes('blue'))).toBe(true)
  } finally { wrapper.unmount() }
})

test('multiple target operations report each intermediate state and reset all defaults', async () => {
  const wrapper = mount(Table, { props: { columns: columns(), data, pagination: false } })
  try {
    await flushPromises()
    ;(wrapper.vm as any).clearFilters(['kind', 'color'])
    await flushPromises()
    expect(rows(wrapper)).toHaveLength(4)
    expect(wrapper.emitted('filter-change')).toEqual([['kind', []], ['color', []]])
    const changes = wrapper.emitted('change')!
    expect((changes[0][1] as any).filters).toEqual({ kind: [], color: ['red'] })
    expect((changes[1][1] as any).filters).toEqual({ kind: [], color: [] })
    ;(wrapper.vm as any).resetFilters()
    await flushPromises()
    expect(rows(wrapper)).toHaveLength(1)
    expect((wrapper.emitted('change')?.at(-1)?.[1] as any).filters).toEqual({ kind: ['x'], color: ['red'] })
    ;(wrapper.vm as any).clearFilters([])
    await flushPromises()
    expect(rows(wrapper)).toHaveLength(4)
  } finally { wrapper.unmount() }
})

test('a filter chosen through the column UI survives clearing a different column', async () => {
  const wrapper = mount(Table, { attachTo: document.body, props: { columns: columns(), data, pagination: false } })
  try {
    await flushPromises()
    await wrapper.findAll('.c-table-filters').at(-1)!.trigger('click')
    await flushPromises()
    const options = document.querySelectorAll<HTMLInputElement>('.c-table-filters-content input[type="radio"]')
    expect(options).toHaveLength(2)
    options[1].click()
    await flushPromises()
    const confirm = Array.from(document.querySelectorAll<HTMLButtonElement>('.c-table-filters-bottom button')).find(button => /确定|Confirm/.test(button.textContent ?? ''))!
    confirm.click()
    await flushPromises()
    expect(rows(wrapper)).toHaveLength(1)
    expect(rows(wrapper)[0]).toContain('blue')
    ;(wrapper.vm as any).clearFilters('kind')
    await flushPromises()
    expect(rows(wrapper)).toHaveLength(2)
    expect(rows(wrapper).every((row: string) => row.includes('blue'))).toBe(true)
  } finally { wrapper.unmount() }
})
