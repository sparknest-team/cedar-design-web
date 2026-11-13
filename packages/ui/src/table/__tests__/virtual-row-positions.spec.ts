import { flushPromises, mount } from '@vue/test-utils'
import { createSSRApp, defineComponent, h, nextTick, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { describe, expect, it, vi } from 'vitest'
import Table from '../table'

const data = Array.from({ length: 30 }, (_, key) => ({ key, name: `Row ${key}` }))
const columns = [{ title: 'Group', children: [{ title: 'Name', dataIndex: 'name' }] }]
const props = { columns, data, pagination: false as const, virtualListProps: { height: 100, estimatedSize: 30 } }

describe('virtual table row positions', () => {
  it('counts header rows and exposes positions on each rendered row', async () => {
    const wrapper = mount(Table, { props })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('32')
    expect(table.findAll('thead tr').map(row => row.attributes('aria-rowindex'))).toEqual(['1', '2'])
    const rows = table.findAll('tbody tr')
    expect(rows.length).toBeGreaterThan(0)
    expect(rows.map(row => Number(row.attributes('aria-rowindex')))).toEqual(rows.map((_, index) => index + 3))
    await wrapper.setProps({ showHeader: false })
    expect(table.attributes('aria-rowcount')).toBe('30')
    expect(table.find('tbody tr').attributes('aria-rowindex')).toBe('1')
    wrapper.unmount()
  })

  it('includes expanded slot details and updates later row positions', async () => {
    const wrapper = mount(Table, { props: { ...props, expandedKeys: [] }, slots: { 'expand-row': () => h('span', 'detail') } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('32')
    await wrapper.setProps({ expandedKeys: [0] })
    expect(table.attributes('aria-rowcount')).toBe('33')
    expect(table.findAll('tbody tr').slice(0, 3).map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5'])
    await wrapper.setProps({ expandedKeys: [] })
    expect(table.attributes('aria-rowcount')).toBe('32')
    wrapper.unmount()
  })

  it('counts nested expanded tree rows without counting collapsed children', async () => {
    const tree = [
      { key: 'a', name: 'Parent', children: [{ key: 'b', name: 'Child', children: [{ key: 'c', name: 'Grandchild' }] }] },
      { key: 'd', name: 'Next' },
    ]
    const wrapper = mount(Table, { props: { ...props, data: tree, expandedKeys: ['a', 'b'] } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('6')
    expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5', '6'])
    await wrapper.setProps({ expandedKeys: ['a'] })
    expect(table.attributes('aria-rowcount')).toBe('5')
    expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5'])
    wrapper.unmount()
  })

  it('omits positions if a callback may or may not produce a detail row', async () => {
    const wrapper = mount(Table, { props: { ...props, expandedKeys: [0], expandable: { expandedRowRender: () => null } } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBeUndefined()
    expect(table.findAll('tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
    wrapper.unmount()
  })

  it('does not execute offscreen detail callbacks to calculate virtual row positions', async () => {
    const expandedRowRender = vi.fn(() => null)
    const rows = Array.from({ length: 200 }, (_, key) => ({ key, name: `Row ${key}` }))
    const wrapper = mount(Table, {
      props: { ...props, data: rows, expandedKeys: [199], expandable: { expandedRowRender } },
    })
    try {
      await flushPromises()
      const table = wrapper.get('.c-table-body table')
      expect(table.attributes('aria-rowcount')).toBeUndefined()
      expect(table.text()).not.toContain('Row 199')
      expect(expandedRowRender).toHaveBeenCalled()
      expect(expandedRowRender).not.toHaveBeenCalledWith(expect.objectContaining({ key: 199 }))
    } finally { wrapper.unmount() }
  })

  it('does not execute an offscreen detail callback while rendering virtual rows on the server', async () => {
    const expandedRowRender = vi.fn(() => null)
    const rows = Array.from({ length: 200 }, (_, key) => ({ key, name: `Row ${key}` }))
    const html = await renderToString(createSSRApp({ render: () => h(Table, {
      ...props, data: rows, expandedKeys: [199], expandable: { expandedRowRender },
    }) }))
    expect(html).not.toContain('aria-rowcount=')
    expect(html).not.toContain('Row 199')
    expect(expandedRowRender).not.toHaveBeenCalledWith(expect.objectContaining({ key: 199 }))
  })

  it('counts an expanded empty tree placeholder', async () => {
    const wrapper = mount(Table, { props: { ...props, data: [{ key: 'empty', name: 'Empty', children: [] }], showEmptyTree: true, expandedKeys: ['empty'] } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('4')
    expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4'])
    wrapper.unmount()
  })

  it('counts static expanded content and updates when it changes', async () => {
    const staticProps = { ...props, data: [{ key: 'a', name: 'One', expand: 'Details' }, { key: 'b', name: 'Two' }], expandedKeys: ['a'] }
    const html = await renderToString(createSSRApp({ render: () => h(Table, staticProps) }))
    expect(html).toContain('aria-rowcount="5"')
    expect(html).toContain('aria-rowindex="5"')
    const wrapper = mount(Table, { props: staticProps })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('5')
    expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5'])
    await wrapper.setProps({ data: [{ key: 'a', name: 'One', expand: '' }, { key: 'b', name: 'Two' }] })
    expect(table.attributes('aria-rowcount')).toBe('4')
    expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4'])
    wrapper.unmount()
  })

  it('updates row-position availability when detail changes between a callback and static content', async () => {
    const records = (expand: string | (() => null)) => [{ key: 'a', name: 'One', expand }, { key: 'b', name: 'Two' }]
    const wrapper = mount(Table, { props: { ...props, data: records(() => null), expandedKeys: ['a'] } })
    try {
      await flushPromises()
      const table = wrapper.get('.c-table-body table')
      expect(table.attributes('aria-rowcount')).toBeUndefined()
      expect(table.findAll('tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
      await wrapper.setProps({ data: records('Details') })
      expect(table.attributes('aria-rowcount')).toBe('5')
      expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5'])
      expect(table.text()).toContain('Details')
      await wrapper.setProps({ data: records(() => null) })
      expect(table.attributes('aria-rowcount')).toBeUndefined()
      expect(table.findAll('tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
      expect(table.text()).not.toContain('Details')
    } finally { wrapper.unmount() }
  })

  it('exposes the same positions during server rendering', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(Table, props) }))
    expect(html).toContain('aria-rowcount="32"')
    expect(html).toContain('aria-rowindex="1"')
    expect(html).toContain('aria-rowindex="3"')
    const expanded = await renderToString(createSSRApp({ render: () => h(Table, {
      ...props, data: [{ key: 'a', name: 'Parent', children: [{ key: 'b', name: 'Child' }] }, { key: 'c', name: 'Last' }], expandedKeys: ['a'],
    }) }))
    expect(expanded).toContain('aria-rowcount="5"')
    expect(expanded).toContain('aria-rowindex="3"')
    expect(expanded).toContain('aria-rowindex="4"')
    expect(expanded).toContain('aria-rowindex="5"')
  })

  it('omits positions if visible records have duplicate keys', async () => {
    const wrapper = mount(Table, { props: { ...props, data: [{ key: 'a', name: 'One' }, { key: 'a', name: 'Two' }] } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBeUndefined()
    expect(table.findAll('tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
    wrapper.unmount()
  })

  it('does not assume that a custom row or virtual data has the standard structure', async () => {
    const customRow = mount(Table, { props, slots: { tr: () => h('tr') } })
    await flushPromises()
    expect(customRow.get('.c-table-body table').attributes('aria-rowcount')).toBeUndefined()
    expect(customRow.findAll('.c-table-body tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
    customRow.unmount()

    const customData = mount(Table, { props: { ...props, virtualListProps: { ...props.virtualListProps, data: [] } } })
    await flushPromises()
    expect(customData.get('.c-table-body table').attributes('aria-rowcount')).toBeUndefined()
    customData.unmount()
  })

  it('uses native row positions when the virtual threshold renders every row', async () => {
    const wrapper = mount(Table, { props: { ...props, virtualListProps: { ...props.virtualListProps, threshold: 30 } } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.findAll('tbody tr')).toHaveLength(30)
    expect(table.attributes('aria-rowcount')).toBeUndefined()
    expect(table.findAll('tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
    await wrapper.setProps({ virtualListProps: { ...props.virtualListProps, threshold: 29 } })
    expect(table.attributes('aria-rowcount')).toBe('32')
    expect(table.find('tbody tr').attributes('aria-rowindex')).toBe('3')
    wrapper.unmount()
  })

  it('updates positions when the expanded-detail slot is added and removed', async () => {
    const show = ref(false)
    const stableProps = { ...props, expandedKeys: [0] }
    const Fixture = defineComponent({ setup: () => () => h(Table, stableProps, show.value ? { 'expand-row': () => h('span', 'detail') } : {}) })
    const wrapper = mount(Fixture)
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('32')
    show.value = true
    await nextTick()
    expect(table.attributes('aria-rowcount')).toBe('33')
    expect(table.findAll('tbody tr').slice(0, 3).map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5'])
    show.value = false
    await nextTick()
    expect(table.attributes('aria-rowcount')).toBe('32')
    wrapper.unmount()
  })

  it('removes and restores positions when a custom row slot is toggled', async () => {
    const custom = ref(false)
    const Fixture = defineComponent({ setup: () => () => h(Table, props, custom.value ? { tr: () => h('tr') } : {}) })
    const wrapper = mount(Fixture)
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('32')
    custom.value = true
    await nextTick()
    expect(table.attributes('aria-rowcount')).toBeUndefined()
    expect(table.findAll('tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
    custom.value = false
    await nextTick()
    expect(table.attributes('aria-rowcount')).toBe('32')
    expect(table.find('tbody tr').attributes('aria-rowindex')).toBe('3')
    wrapper.unmount()
  })

  it('tracks the displayed page and sorted order when data changes', async () => {
    const rows = Array.from({ length: 12 }, (_, key) => ({ key, score: key }))
    const sortedColumns = (sortOrder: 'ascend' | 'descend') => [{ title: 'Score', dataIndex: 'score', sortable: { sortOrder, sortDirections: ['ascend', 'descend'] } }]
    const wrapper = mount(Table, { props: { data: rows, columns: sortedColumns('ascend'), pagination: { modelValue: 2, pageSize: 4, responsive: false }, virtualListProps: { height: 200, estimatedSize: 30 } } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    const rendered = () => table.findAll('tbody tr').map(row => [row.text(), row.attributes('aria-rowindex')])
    expect(table.attributes('aria-rowcount')).toBe('5')
    expect(rendered()).toEqual([['4', '2'], ['5', '3'], ['6', '4'], ['7', '5']])
    await wrapper.setProps({ columns: sortedColumns('descend') })
    expect(rendered()).toEqual([['7', '2'], ['6', '3'], ['5', '4'], ['4', '5']])
    await wrapper.setProps({ pagination: { modelValue: 3, pageSize: 4, responsive: false } })
    expect(rendered()).toEqual([['3', '2'], ['2', '3'], ['1', '4'], ['0', '5']])
    await wrapper.setProps({ data: rows.slice(0, 10), pagination: { modelValue: 3, pageSize: 4, responsive: false } })
    expect(table.attributes('aria-rowcount')).toBe('3')
    expect(rendered()).toEqual([['1', '2'], ['0', '3']])
    wrapper.unmount()
  })
})
