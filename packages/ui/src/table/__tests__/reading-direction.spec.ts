import { defineComponent, h, ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import { useColumnResize } from '../hooks/use-column-resize'
import Table from '../table'

test('column resizing measures from the inline start and preserves physical pixel widths', () => {
  const cell = document.createElement('th')
  cell.getBoundingClientRect = () => ({ x: 100, left: 100, right: 250, width: 150 }) as DOMRect
  const resized = vi.fn()
  let controls!: ReturnType<typeof useColumnResize>
  const wrapper = mount(defineComponent({ setup() {
    controls = useColumnResize(ref({ amount: cell }), resized)
    return () => h('div')
  } }))
  try {
    cell.dir = 'rtl'
    controls.handleThMouseDown('amount', new MouseEvent('mousedown', { clientX: 100 }))
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 80 }))
    expect(resized).toHaveBeenLastCalledWith('column-resize', 'amount', 170)
    controls.handleThMouseUp()
    cell.dir = 'ltr'
    controls.handleThMouseDown('amount', new MouseEvent('mousedown', { clientX: 250 }))
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 270 }))
    expect(resized).toHaveBeenLastCalledWith('column-resize', 'amount', 170)
    controls.handleThMouseUp()
  } finally {
    controls.handleThMouseUp()
    wrapper.unmount()
  }
})

import { getFixedNumber, getOperationStyle, getGroupColumns } from '../utils'
import { orderPhysicalColumns } from '../column-direction'
test('physical fixed partitions preserve source keys and calculate grouped RTL offsets', () => {
  const source: any[] = [{ dataIndex: 'left1', fixed: 'left', width: 70 }, { dataIndex: 'left2', fixed: 'left', width: 80 }, { dataIndex: 'normal', width: 100 }, { dataIndex: 'right1', fixed: 'right', width: 90 }, { dataIndex: 'right2', fixed: 'right', width: 60 }]
  const keys = source.map(c => c.dataIndex)
  const { dataColumns } = getGroupColumns(source, new Map(), {}, 'rtl')
  expect(orderPhysicalColumns(dataColumns, c => c.fixed, 'rtl').map(c => c.dataIndex)).toEqual(['right1', 'right2', 'normal', 'left1', 'left2'])
  expect(source.map(c => c.dataIndex)).toEqual(keys)
  const options = { dataColumns, operations: [] }
  expect(getFixedNumber(dataColumns[0], options, 'fixed', 'rtl')).toBe(80)
  expect(getFixedNumber(dataColumns[1], options, 'fixed', 'rtl')).toBe(0)
  expect(getFixedNumber(dataColumns[4], options, 'fixed', 'rtl')).toBe(90)
  expect(dataColumns[0].isLastLeftFixed).toBe(true)
  expect(dataColumns[4].isFirstRightFixed).toBe(true)
  const operation = { name: 'selection', fixed: true, width: 40 }
  expect(getOperationStyle(operation, [operation], 'rtl', dataColumns)).toEqual({ left: '150px' })
  dataColumns[0]._resizeWidth = 200; dataColumns[0]._realWidth = 75
  expect(getOperationStyle(operation, [operation], 'rtl', dataColumns, 'auto')).toEqual({ left: '155px' })
})

test('mixed multi-level groups project into aligned physical header sections without mutating source columns', () => {
  const source: any[] = [{ title: 'Mixed', children: [{ dataIndex: 'left', fixed: 'left', width: 80 }, { title: 'Nested', children: [{ dataIndex: 'normal', width: 120 }, { dataIndex: 'right', fixed: 'right', width: 90 }] }] }]
  const snapshot = JSON.stringify(source)
  const { dataColumns, groupColumns } = getGroupColumns(source, new Map(), {}, 'rtl')
  expect(groupColumns[0].map(group => [group.fixed, group.colSpan])).toEqual([['right', 1], [undefined, 1], ['left', 1]])
  const visualLeaves = orderPhysicalColumns(dataColumns, column => column.fixed, 'rtl')
  expect(visualLeaves.map(column => column.dataIndex)).toEqual(['right', 'normal', 'left'])
  expect(JSON.stringify(source)).toBe(snapshot)
})

test('nested LTR group headers span exactly the leaves that scroll together', () => {
  const { groupColumns } = getGroupColumns([{
    title: 'User Info',
    children: [
      { dataIndex: 'birthday', fixed: 'left' },
      { title: 'Address', children: [{ dataIndex: 'city', fixed: 'left' }, { dataIndex: 'road' }] },
    ],
  }], new Map(), {})
  const sections = groupColumns.flat().filter(column => column.children).map(column => [
    column.title, column.fixed, column.colSpan, column.children?.map(leaf => leaf.dataIndex),
  ])
  expect(sections).toEqual([
    ['User Info', 'left', 2, ['birthday', 'city']],
    ['User Info', undefined, 1, ['road']],
    ['Address', 'left', 1, ['city']],
    ['Address', undefined, 1, ['road']],
  ])
})

import { useFilter } from '../hooks/use-filter'
import { useSorter } from '../hooks/use-sorter'
test('direction/width column rebuilds retain uncontrolled filter and sort state while real default changes reset it', async () => {
  const columns = ref<any[]>([{ dataIndex: 'amount', width: 100, sortable: {}, filterable: {} }])
  let filters!: ReturnType<typeof useFilter>, sorter!: ReturnType<typeof useSorter>
  const wrapper = mount(defineComponent({ setup() {
    filters = useFilter({ columns, onFilterChange: () => undefined })
    sorter = useSorter({ columns, onSorterChange: () => undefined })
    return () => h('div')
  } }))
  try {
    filters._filters.value = { amount: ['chosen'] }
    sorter._sorter.value = { field: 'amount', direction: 'descend' }
    columns.value = columns.value.map(column => ({ ...column, width: 150 }))
    await nextTick()
    expect(filters.computedFilters.value).toEqual({ amount: ['chosen'] })
    expect(sorter.computedSorter.value).toEqual({ field: 'amount', direction: 'descend' })
    columns.value = [{ dataIndex: 'amount', sortable: { defaultSortOrder: 'ascend' }, filterable: { defaultFilteredValue: ['default'] } }]
    await nextTick()
    expect(filters._filters.value).toEqual({ amount: ['default'] })
    expect(sorter._sorter.value).toEqual({ field: 'amount', direction: 'ascend' })
  } finally { wrapper.unmount() }
})

test('explicit direction updates the table without recreating an extra-column cell', async () => {
  const direction = ref<'ltr' | 'rtl'>('ltr')
  const wrapper = mount({
    render: () => h(Table, {
      dir: direction.value,
      columns: [{ title: 'Name', dataIndex: 'name', fixed: 'right' }],
      data: [{ key: 'a', name: 'Ada' }], pagination: false,
      extraColumn: { dataIndex: 'name' },
    }, { 'extra-column-cell': () => h('input', { 'data-draft': '' }) }),
  })
  try {
    const input = wrapper.get('[data-draft]').element as HTMLInputElement
    input.value = 'draft'
    direction.value = 'rtl'
    await nextTick()
    expect(wrapper.get('[data-draft]').element).toBe(input)
    expect(input.value).toBe('draft')
    expect(wrapper.get('.c-table').attributes('dir')).toBe('rtl')
    direction.value = 'ltr'
    await nextTick()
    expect(wrapper.get('[data-draft]').element).toBe(input)
    expect(input.value).toBe('draft')
  } finally { wrapper.unmount() }
})
