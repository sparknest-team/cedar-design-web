import { describe, it, expect, vi } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { useTableColumnManager } from '../use-table-column-manager'
import type { ColumnCatalog, ManagedTableColumn } from '../types'
import type { TableColumnData } from '../../table/types'
import { flattenTableColumns } from '../utils'

function createManagerHarness(catalog: ColumnCatalog, defaultColumns: ManagedTableColumn[]) {
  return mount(
    defineComponent({
      setup() {
        const manager = useTableColumnManager({
          defaultColumns,
          columnDefinitions: catalog,
          columnDefaults: { width: 100 },
        })
        return { manager }
      },
      render() {
        return h('div')
      },
    })
  )
}

it('discards panel drafts on close and restores the default columns on reset', () => {
  const wrapper = createManagerHarness(
    [{ dataIndex: 'id', title: 'ID' }, { dataIndex: 'name', title: 'Name' }],
    [{ dataIndex: 'id', title: 'ID', manager: { required: true } }, { dataIndex: 'name', title: 'Name' }],
  )
  try {
    const manager = wrapper.vm.manager
    manager.open()
    manager.managerProps.value['onUpdate:modelValue']([{ dataIndex: 'id' }])
    manager.close()
    expect(flattenTableColumns(manager.columns.value).map(column => column.dataIndex)).toEqual(['id', 'name'])
    manager.open()
    expect(manager.managerProps.value.modelValue?.map(item => item.dataIndex)).toEqual(['id', 'name'])
    manager.removeColumn('id')
    manager.removeColumn('name')
    expect(flattenTableColumns(manager.columns.value).map(column => column.dataIndex)).toEqual(['id'])
    manager.resetToDefault()
    expect(flattenTableColumns(manager.columns.value).map(column => column.dataIndex)).toEqual(['id', 'name'])
  } finally { wrapper.unmount() }
})

describe('useTableColumnManager insert frozen inheritance', () => {
  it('new columns inherit anchor fixed position via insertColumns', async () => {
    const catalog: ColumnCatalog = [
      {
        title: '任务信息',
        key: 'task',
        children: [
          { dataIndex: 'priority', title: '优先级' },
          { dataIndex: 'bizLine', title: '业务线' },
        ],
      },
      {
        title: '其他',
        key: 'other',
        children: [{ dataIndex: 'assignee', title: '执行人' }],
      },
    ]

    const defaultColumns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [
          { dataIndex: 'priority', title: '优先级', fixed: 'left' },
          { dataIndex: 'bizLine', title: '业务线' },
        ],
      },
    ]

    const wrapper = createManagerHarness(catalog, defaultColumns)
    const manager = wrapper.vm.manager

    manager.insertColumns({ dataIndex: 'priority', side: 'left', insertKeys: ['assignee'] })
    await nextTick()

    const inserted = flattenTableColumns(manager.columns.value).find((c) => c.dataIndex === 'assignee')
    expect(inserted?.fixed).toBe('left')
  })

  it('new columns inherit right fixed position via insertColumns', async () => {
    const catalog: ColumnCatalog = [
      {
        title: '任务信息',
        key: 'task',
        children: [
          { dataIndex: 'priority', title: '优先级' },
          { dataIndex: 'bizLine', title: '业务线' },
        ],
      },
      {
        title: '其他',
        key: 'other',
        children: [{ dataIndex: 'assignee', title: '执行人' }],
      },
    ]

    const defaultColumns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [
          { dataIndex: 'priority', title: '优先级' },
          { dataIndex: 'bizLine', title: '业务线', fixed: 'right' },
        ],
      },
    ]

    const wrapper = createManagerHarness(catalog, defaultColumns)
    const manager = wrapper.vm.manager

    manager.insertColumns({ dataIndex: 'bizLine', side: 'right', insertKeys: ['assignee'] })
    await nextTick()

    const inserted = flattenTableColumns(manager.columns.value).find((c) => c.dataIndex === 'assignee')
    expect(inserted?.fixed).toBe('right')
  })

  it('new columns do not inherit fixed when anchor is not fixed', async () => {
    const catalog: ColumnCatalog = [
      {
        title: '任务信息',
        key: 'task',
        children: [
          { dataIndex: 'priority', title: '优先级' },
          { dataIndex: 'bizLine', title: '业务线' },
        ],
      },
      {
        title: '其他',
        key: 'other',
        children: [{ dataIndex: 'assignee', title: '执行人' }],
      },
    ]

    const defaultColumns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [
          { dataIndex: 'priority', title: '优先级' },
          { dataIndex: 'bizLine', title: '业务线' },
        ],
      },
    ]

    const wrapper = createManagerHarness(catalog, defaultColumns)
    const manager = wrapper.vm.manager

    manager.insertColumns({ dataIndex: 'bizLine', side: 'right', insertKeys: ['assignee'] })
    await nextTick()

    const inserted = flattenTableColumns(manager.columns.value).find((c) => c.dataIndex === 'assignee')
    expect(inserted?.fixed).toBeUndefined()
  })
})

describe('useTableColumnManager catalog column width', () => {
  it('uses catalog width as the single column definition', async () => {
    const catalog: ColumnCatalog = [
      {
        title: '任务信息',
        key: 'task',
        children: [
          { dataIndex: 'priority', title: '优先级', width: 150 },
          { dataIndex: 'assignee', title: '执行人', width: 100 },
        ],
      },
    ]

    const defaultColumns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [{ dataIndex: 'priority', title: '优先级', width: 150 }],
      },
    ]

    const wrapper = createManagerHarness(catalog, defaultColumns)
    const manager = wrapper.vm.manager

    manager.insertColumns({ dataIndex: 'priority', side: 'right', insertKeys: ['assignee'] })
    await nextTick()

    const inserted = flattenTableColumns(manager.columns.value).find((c) => c.dataIndex === 'assignee')
    expect(inserted).toBeDefined()
    expect(inserted?.width).toBe(100)

    // 已有列保持原宽度
    const priority = flattenTableColumns(manager.columns.value).find((c) => c.dataIndex === 'priority')
    expect(priority?.width).toBe(150)
  })

  it('keeps dragged width of an added column across rebuilds', async () => {
    const catalog: ColumnCatalog = [
      {
        title: '任务信息',
        key: 'task',
        children: [
          { dataIndex: 'priority', title: '优先级', width: 150 },
          { dataIndex: 'assignee', title: '执行人', width: 100 },
        ],
      },
    ]

    const defaultColumns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [{ dataIndex: 'priority', title: '优先级', width: 150 }],
      },
    ]

    const wrapper = createManagerHarness(catalog, defaultColumns)
    const manager = wrapper.vm.manager

    manager.insertColumns({ dataIndex: 'priority', side: 'right', insertKeys: ['assignee'] })
    await nextTick()
    manager.handleColumnResize('assignee', 180)
    await nextTick()
    // 触发一次重建（冻结会走 buildColumnsResult）
    manager.freezeColumn('assignee', 'left')
    await nextTick()

    const inserted = flattenTableColumns(manager.columns.value).find((c) => c.dataIndex === 'assignee')
    expect(inserted?.width).toBe(180)
  })
})

describe('useTableColumnManager required catalog items', () => {
  it('protects catalog required columns from header removal', async () => {
    const catalog: ColumnCatalog = [
      { dataIndex: 'required', title: '必选列' },
      { dataIndex: 'optional', title: '可选列' },
    ]
    const wrapper = createManagerHarness(catalog, [
      { dataIndex: 'required', title: '必选列', manager: { required: true } },
      { dataIndex: 'optional', title: '可选列' },
    ])
    const manager = wrapper.vm.manager

    manager.removeColumn('required')
    manager.removeColumn('optional')
    await nextTick()

    expect(flattenTableColumns(manager.columns.value).map((item) => item.dataIndex)).toEqual(['required'])
  })

  it('exposes restorable state and remembers only resized widths', async () => {
    const catalog: ColumnCatalog = [
      { dataIndex: 'required', title: '必选列' },
      { dataIndex: 'name', title: '名称' },
    ]
    const wrapper = createManagerHarness(catalog, [
      { dataIndex: 'required', title: '必选列', width: 120, manager: { required: true } },
      { dataIndex: 'name', title: '名称', width: 160 },
    ])
    const manager = wrapper.vm.manager

    expect(manager.state.value.items.find((item) => item.dataIndex === 'name')?.width).toBeUndefined()
    manager.handleColumnResize('name', 220)
    await nextTick()
    expect(manager.state.value.items.find((item) => item.dataIndex === 'name')?.width).toBe(220)

    manager.restore({ version: 2, items: [{ dataIndex: 'name', title: '自定义名称', width: 240 }] })
    await nextTick()
    expect(manager.state.value.items).toEqual([
      { dataIndex: 'required' },
      { dataIndex: 'name', title: '自定义名称', width: 240 },
    ])
  })
})

describe('useTableColumnManager definition sources', () => {
  it('builds new lightweight definitions with columnDefaults and createColumn', async () => {
    const wrapper = mount(
      defineComponent({
        setup() {
          return {
            manager: useTableColumnManager({
              defaultColumns: [{ dataIndex: 'id', title: '编号', width: 90 }],
              columnDefinitions: [
                { dataIndex: 'id', title: '编号' },
                { dataIndex: 'status', title: '状态' },
              ],
              columnDefaults: { width: 120, ellipsis: true },
              createColumn: (definition) => ({
                dataIndex: definition.dataIndex,
                title: definition.title,
                ...(definition.dataIndex === 'status' ? { slotName: 'status' } : {}),
              }),
            }),
          }
        },
        render: () => h('div'),
      })
    )
    wrapper.vm.manager.insertColumns({ dataIndex: 'id', side: 'right', insertKeys: ['status'] })
    await nextTick()
    const status = flattenTableColumns(wrapper.vm.manager.columns.value).find((item) => item.dataIndex === 'status')
    expect(status).toMatchObject({ width: 120, ellipsis: true, slotName: 'status' })
  })

  it('resolves unknown persisted remote definitions before restoring', async () => {
    const resolve = vi.fn(async () => [{ dataIndex: 'remoteStatus', title: '远程状态' }])
    const wrapper = mount(
      defineComponent({
        setup() {
          return {
            manager: useTableColumnManager({
              defaultColumns: [{ dataIndex: 'id', title: '编号', manager: { required: true } }],
              columnSource: {
                search: async () => ({ items: [] }),
                resolve,
              },
              columnDefaults: { width: 140 },
            }),
          }
        },
        render: () => h('div'),
      })
    )
    await wrapper.vm.manager.restore({ version: 2, items: [{ dataIndex: 'remoteStatus' }] })
    expect(resolve).toHaveBeenCalledWith(['remoteStatus'])
    expect(flattenTableColumns(wrapper.vm.manager.columns.value)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ dataIndex: 'id' }),
        expect.objectContaining({ dataIndex: 'remoteStatus', width: 140 }),
      ])
    )
  })
})
