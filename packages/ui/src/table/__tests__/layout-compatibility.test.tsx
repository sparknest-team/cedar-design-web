import { createHash } from 'node:crypto'
import { flushPromises, mount } from '@vue/test-utils'
import { h, toRaw } from 'vue'
import { describe, expect, test } from 'vitest'
import Table, * as publicApi from '../index'
import { tableProps } from '../props'
import { updateColumnsWidth } from '../hooks/use-columns-layout'
import { getFixedNumber, getGroupColumns, getOperationFixedNumber, getOperationStyle } from '../utils'
import { getColumnLayoutKey, markTableExtraColumn } from '../extra-column'
import type { TableColumnData, TableData, TableOperationColumn, TablePaginationScope } from '../types'

// These digests are captured from the original implementation BEFORE extraction.
// They cover output widths and per-column writebacks, not a second copy of the algorithm.
const digest = (value: unknown) => createHash('sha256').update(JSON.stringify(value, (_key, item) =>
  typeof item === 'number' && !Number.isFinite(item) ? String(item) : item,
)).digest('hex')

describe('pre-refactor Table layout compatibility', () => {
  test('width allocation preserves rounding, missing fields, collisions and writebacks', () => {
    let seed = 241119
    const pick = <T,>(items: T[]): T => {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
      return items[seed % items.length]
    }
    const results: unknown[] = []
    for (let index = 0; index < 800; index++) {
      const source: TableColumnData[] = Array.from({ length: pick([0, 1, 2, 3, 5]) }, (_, column) => ({
        dataIndex: pick([`c${column}`, `c${column}`, 'duplicate', '', undefined]),
        width: pick([undefined, undefined, 0, 40, 81, 160, 1.5]),
        minWidth: pick([undefined, 0, 50, 83]),
        _resizeWidth: pick([undefined, undefined, 0, 110, NaN]),
        _realWidth: 999,
      }))
      if (index % 3 === 0) source.push(markTableExtraColumn({ dataIndex: pick(['duplicate', 'extra']), width: 28, _realWidth: 999 }))
      const { dataColumns } = getGroupColumns(source, new Map(), {})
      const result = updateColumnsWidth({
        containerWidth: pick([0, 100, 300, 601, 1000]),
        dataColumns,
        operations: pick([[], [{ name: 'selection-checkbox' as const }], [{ name: 'expand' as const, width: 0 }, { name: 'selection-checkbox' as const, width: 43 }]]),
        fit: pick([true, false]),
        exactDataIndexes: pick([undefined, ['duplicate'], ['extra']]),
      })
      results.push({ result, columns: dataColumns.map(column => ({ key: getColumnLayoutKey(column), realWidth: column._realWidth })) })
    }
    expect(digest(results)).toMatchSnapshot()
  })

  test('frozen offsets preserve group boundaries, physical sides and operation identity', () => {
    const results: unknown[] = []
    for (const dir of ['ltr', 'rtl'] as const) {
      for (const layout of [undefined, 'fixed', 'auto'] as const) {
        for (const resize of [undefined, 0, 131]) {
          const columns: TableColumnData[] = [
            { title: 'Left', children: [{ dataIndex: 'a', fixed: 'left', width: 80, _realWidth: 91, _resizeWidth: resize }, { dataIndex: 'b', fixed: 'left', width: 90 }] },
            { title: 'Mixed', children: [{ dataIndex: 'c', width: 120 }, { dataIndex: 'd', fixed: 'right', width: 140, _realWidth: 151, _resizeWidth: resize }] },
            { dataIndex: 'e', fixed: 'right', width: 70 },
            markTableExtraColumn({ dataIndex: 'a', fixed: 'right', width: 28 }),
          ]
          const { dataColumns, groupColumns } = getGroupColumns(columns, new Map(), {}, dir)
          for (const operations of [
            [] as TableOperationColumn[],
            [{ name: 'expand', fixed: true, width: 40, _realWidth: 53 }, { name: 'selection-checkbox', fixed: true, width: 0 }, { name: 'expand', fixed: false, width: 31 }] as TableOperationColumn[],
          ]) {
            results.push({ dir, layout, resize,
              columns: [...dataColumns, ...groupColumns.flat()].map(column => ({ key: getColumnLayoutKey(column), fixed: column.fixed, offset: getFixedNumber(column, { dataColumns, operations }, layout, dir) })),
              operations: [...operations, { name: 'expand', fixed: true } as TableOperationColumn].map(column => ({ offset: getOperationFixedNumber(column, operations), style: getOperationStyle(column, operations, dir, dataColumns, layout) })),
            })
          }
        }
      }
    }
    expect(digest(results)).toMatchSnapshot()
  })

  test('public runtime surface and instance fields remain available', async () => {
    const props = Object.fromEntries(Object.entries(tableProps).map(([key, value]) => {
      const prop = value as { type: Function | Function[]; default?: unknown }
      return [key, { types: (Array.isArray(prop.type) ? prop.type : [prop.type]).map(type => type.name), ...(Object.hasOwn(prop, 'default') ? { default: typeof prop.default === 'function' ? prop.default() : prop.default } : {}) }]
    }))
    expect({ exports: Object.keys(publicApi).sort(), props, emits: Object.keys(Table.emits!).sort(), methods: Object.keys(Table.methods!).sort() }).toMatchSnapshot()
    for (const [name, exported] of [['Thead', 'Thead'], ['Tbody', 'Tbody'], ['Tr', 'Tr'], ['Th', 'Th'], ['Td', 'Td'], ['Column', 'TableColumn']] as const) expect(Table[name]).toBe(publicApi[exported])
    const wrapper = mount(Table, { props: { columns: [{ dataIndex: 'name', title: 'Name' }], data: [{ key: 'a', name: 'Alpha' }], pagination: false } })
    try {
      await flushPromises()
      expect(Object.keys(wrapper.vm.$.setupState).sort()).toMatchSnapshot()
      expect(Object.keys(Table.methods!).every(name => typeof (wrapper.vm as unknown as Record<string, unknown>)[name] === 'function')).toBe(true)
    } finally { wrapper.unmount() }
  })

  test('filter reset, page selection and public calls keep their event trace and raw identity', async () => {
    const trace: unknown[] = []
    const data = [{ key: 'a', kind: 'x' }, { key: 'b', kind: 'y' }, { key: 'c', kind: 'x' }]
    const wrapper = mount(Table, { props: {
      data,
      columns: [{ dataIndex: 'kind', title: 'Kind', filterable: { defaultFilteredValue: ['x'], filter: (values: string[], record: TableData) => values.includes(record.kind) } }],
      rowSelection: { onlyCurrent: true },
      pagination: { defaultValue: 1, pageSize: 1, responsive: false },
      onFilterChange: (...args: unknown[]) => trace.push(['filter-change', ...args]),
      onChange: (current, extra, sorted) => trace.push(['change', current.map(row => row.key), extra, sorted.map(row => row.key)]),
      'onUpdate:selectedKeys': (keys: (string | number)[]) => trace.push(['update:selectedKeys', keys]),
      onSelectionChange: (keys: (string | number)[]) => trace.push(['selection-change', keys]),
      onPageChange: (page: number) => trace.push(['page-change', page]),
    }, slots: { pagination: (scope: TablePaginationScope) => h('button', { 'data-next': true, onClick: () => scope.onChange(scope.page + 1) }, 'Next') } })
    try {
      await flushPromises()
      expect(wrapper.vm.select('a', true)).toBeUndefined()
      await flushPromises()
      await wrapper.get('[data-next]').trigger('click')
      await flushPromises()
      expect(wrapper.vm.clearFilters('kind')).toBeUndefined()
      await flushPromises()
      expect(wrapper.vm.resetFilters('kind')).toBeUndefined()
      await flushPromises()
      expect(trace).toMatchSnapshot()
      const changes = wrapper.emitted('change')!
      for (const args of changes) for (const row of args[0] as typeof data) expect(data).toContain(toRaw(row))
    } finally { wrapper.unmount() }
  })
})
