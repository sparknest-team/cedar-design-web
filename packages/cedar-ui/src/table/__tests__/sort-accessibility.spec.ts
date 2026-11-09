import { h } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '../table'

test('only the actively sorted column exposes its current order', async () => {
  const wrapper = mount(Table, { props: { pagination: false, data: [{ key: 1, a: 1, b: 2 }], columns: [
    { title: 'A', dataIndex: 'a', sortable: { sortDirections: ['ascend', 'descend'] } },
    { title: 'B', dataIndex: 'b', sortable: { sortDirections: ['ascend', 'descend'] } },
  ] } })
  try {
    const headers = () => wrapper.findAll('thead th')
    expect(headers().every(th => th.attributes('aria-sort') === undefined)).toBe(true)
    const first = wrapper.findAll('.c-table-cell-with-sorter')[0]
    await first.trigger('keydown', { key: 'Enter' }); await flushPromises()
    expect(headers()[0].attributes('aria-sort')).toBe('ascending')
    await first.trigger('keydown', { key: ' ' }); await flushPromises()
    expect(headers()[0].attributes('aria-sort')).toBe('descending')
    await wrapper.findAll('.c-table-cell-with-sorter')[1].trigger('click'); await flushPromises()
    expect(headers()[0].attributes('aria-sort')).toBeUndefined()
    expect(headers()[1].attributes('aria-sort')).toBe('ascending')
  } finally { wrapper.unmount() }
})

test('keyboard and click events on a custom header editor do not trigger sorting', async () => {
  const wrapper = mount(Table, { props: { pagination: false, data: [{ key: 1, a: 1 }], columns: [
    { title: () => h('input', { 'aria-label': 'Header editor' }), dataIndex: 'a', sortable: { sortDirections: ['ascend', 'descend'] } },
  ] } })
  try {
    const input = wrapper.get('thead input')
    await input.trigger('keydown', { key: ' ' })
    await input.trigger('keydown', { key: 'Enter' })
    await input.trigger('click')
    expect(wrapper.emitted('sorter-change')).toBeUndefined()
  } finally { wrapper.unmount() }
})

test('controlled sort state stays authoritative when a proposal is not accepted', async () => {
  const makeColumns = (sortOrder: 'ascend' | 'descend') => [{ title: 'A', dataIndex: 'a', sortable: { sortOrder, sortDirections: ['ascend', 'descend'] } }]
  const wrapper = mount(Table, { props: { pagination: false, data: [{ key: 1, a: 1 }], columns: makeColumns('ascend') } })
  try {
    expect(wrapper.get('thead th').attributes('aria-sort')).toBe('ascending')
    await wrapper.get('.c-table-cell-with-sorter').trigger('click')
    await flushPromises()
    expect(wrapper.get('thead th').attributes('aria-sort')).toBe('ascending')
    await wrapper.setProps({ columns: makeColumns('descend') })
    expect(wrapper.get('thead th').attributes('aria-sort')).toBe('descending')
  } finally { wrapper.unmount() }
})
