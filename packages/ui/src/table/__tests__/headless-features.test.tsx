import { flushPromises, mount } from '@vue/test-utils'
import { computed, defineComponent, h, ref } from 'vue'
import { expect, test } from 'vitest'
import TableCore from '../core'
import { useTableFilters } from '../features/filter'
import type { TableFilterColumn } from '../features/filter'
import { filterTableData } from '../features/filter/client'
import { useTableSorting } from '../features/sort'
import { sortTableData } from '../features/sort/client'
import type { TableColumnData } from '../types'

const data = [{ key: 'a', kind: 'x', score: 2 }, { key: 'b', kind: 'y', score: 1 }, { key: 'c', kind: 'x', score: 1 }]

test('remote filter state works with Core without client processing or built-in UI', async () => {
  const request: unknown[] = []
  const columns = ref<TableFilterColumn[]>([{ dataIndex: 'kind', filterable: { defaultFilteredValue: ['x'] } }])
  let filters: ReturnType<typeof useTableFilters>
  const wrapper = mount(defineComponent({ setup() {
    filters = useTableFilters({ columns, onChange: (field, requested, effective) => request.push({ field, requested, effective }) })
    return () => h(TableCore, { columns: [{ dataIndex: 'kind' }], data })
  } }))
  try {
    expect(filters!.filters.value).toEqual({ kind: ['x'] })
    filters!.setFilter('kind', ['y']); await flushPromises()
    expect(request).toEqual([{ field: 'kind', requested: ['y'], effective: { kind: ['y'] } }])
    expect(wrapper.findAll('tbody tr')).toHaveLength(3)
    expect(wrapper.find('.c-table-filters').exists()).toBe(false)
    filters!.clearFilters(); await flushPromises()
    expect(filters!.filters.value).toEqual({ kind: [] })
    filters!.resetFilters(); await flushPromises()
    expect(filters!.filters.value).toEqual({ kind: ['x'] })
  } finally { wrapper.unmount() }
})

test('client filtering/sorting compose outside Core and preserve row identity and stable ties', async () => {
  let filters: ReturnType<typeof useTableFilters>
  let sorting: ReturnType<typeof useTableSorting>
  const columns = ref<TableColumnData[]>([
    { dataIndex: 'kind', filterable: { defaultFilteredValue: ['x'], filter: (values, row) => values.includes(row.kind) } },
    { dataIndex: 'score', sortable: { defaultSortOrder: 'ascend', sortDirections: ['ascend', 'descend'] } },
  ])
  const wrapper = mount(defineComponent({ setup() {
    filters = useTableFilters({ columns }); sorting = useTableSorting({ columns })
    const rows = computed(() => sortTableData(filterTableData(data, filters.filters.value, columns.value), sorting.sorter.value, columns.value))
    return () => h(TableCore, { columns: [{ dataIndex: 'kind' }, { dataIndex: 'score' }], data: rows.value })
  } }))
  try {
    await flushPromises()
    expect(wrapper.findAll('tbody tr').map(row => row.text())).toEqual(['x1', 'x2'])
    filters!.clearFilters(); await flushPromises()
    expect(wrapper.findAll('tbody tr').map(row => row.text())).toEqual(['y1', 'x1', 'x2'])
    expect(sortTableData(data, { field: 'score', direction: 'ascend' }, columns.value)).toEqual([data[1], data[2], data[0]])
    expect(filterTableData(data, { kind: ['x'] }, columns.value)[0]).toBe(data[0])
    expect(data.map(row => row.key)).toEqual(['a', 'b', 'c'])
  } finally { wrapper.unmount() }
})

test('controlled state reports proposals without replacing its external value', async () => {
  let filters: ReturnType<typeof useTableFilters>
  let sorting: ReturnType<typeof useTableSorting>
  const changes: unknown[] = []
  const columns = ref<TableColumnData[]>([{ dataIndex: 'kind', filterable: { filteredValue: ['x'], defaultFilteredValue: ['y'], filter: (values, row) => values.includes(row.kind) } }, { dataIndex: 'score', sortable: { sortOrder: 'descend', sortDirections: ['ascend', 'descend'] } }])
  const wrapper = mount(defineComponent({ setup() {
    filters = useTableFilters({ columns, onChange: (...args) => changes.push(args) }); sorting = useTableSorting({ columns })
    return () => null
  } }))
  try {
    filters!.setFilter('kind', ['y']); sorting!.setSorter('score', 'ascend')
    expect(filters!.filters.value).toEqual({ kind: ['x'] })
    expect(sorting!.sorter.value).toEqual({ field: 'score', direction: 'descend' })
    expect(changes[0]).toEqual(['kind', ['y'], { kind: ['x'] }])
    expect(sortTableData(data, { field: 'score', direction: 'ascend' }, [{ dataIndex: 'score', sortable: { sorter: true, sortDirections: ['ascend', 'descend'] } }])).toEqual(data)
  } finally { wrapper.unmount() }
})
