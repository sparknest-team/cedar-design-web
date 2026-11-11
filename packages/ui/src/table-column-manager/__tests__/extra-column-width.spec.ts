import { describe, it, expect } from 'vitest'
import { reactive } from 'vue'
import { getGroupColumns } from '../../table/utils'
import { updateColumnsWidth } from '../../table/hooks/use-columns-layout'
import { getExtraColumnWidth, TABLE_EXTRA_COLUMN_KEY } from '../../table/extra-column'
import { buildColumnsResult, flattenTableColumns } from '../utils'
import type { TableColumnData } from '../../table/types'
import type { ColumnCatalog } from '../types'

const size = 'xs'

const buildExtraColumn = (): TableColumnData => ({
  dataIndex: TABLE_EXTRA_COLUMN_KEY,
  title: '',
  width: getExtraColumnWidth(size),
  fixed: 'right',
  align: 'center',
  headerCellClass: 'c-table-extra-column-cell',
  cellClass: 'c-table-extra-column-cell',
  slotName: 'extra-column-cell',
  render: () => null,
})

describe('table column manager extra-column width', () => {
  it('keeps extra-column width after inserting a column into a group', () => {
    const columnMap = new Map<string, TableColumnData>()
    const columnWidth = reactive<Record<string, number>>({})

    const baseColumns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [
          { dataIndex: 'priority', title: '优先级', width: 150 },
          { dataIndex: 'bizLine', title: '业务线', width: 160 },
          { dataIndex: 'status', title: '状态', width: 140 },
        ],
      },
      {
        title: '人员与时间',
        children: [
          { dataIndex: 'owner', title: '负责人', width: 100 },
          { dataIndex: 'updatedAt', title: '更新时间', width: 140 },
        ],
      },
    ]

    // simulate extra-column appended by table.tsx
    baseColumns.push(buildExtraColumn())

    const result = getGroupColumns(baseColumns, columnMap, columnWidth)
    const layout1 = updateColumnsWidth({
      containerWidth: 1200,
      dataColumns: result.dataColumns,
      operations: [],
      fit: true,
      // 对齐 table.tsx：extra-column 钉死，不参与铺满容器的比例放大
      exactDataIndexes: [TABLE_EXTRA_COLUMN_KEY],
    })

    expect(layout1.columnRealWidth[TABLE_EXTRA_COLUMN_KEY]).toBe(28)
    // 全显式列宽之和小于容器 → 非钉死列按比例放大撑满容器（表格不缩小）
    expect(layout1.bodyWidth).toBe(1200)

    // simulate manager inserting a new column into the first group
    const nextBaseColumns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [
          { dataIndex: 'priority', title: '优先级', width: 150 },
          { dataIndex: 'bizLine', title: '业务线', width: 160 },
          { dataIndex: 'status', title: '状态', width: 140 },
          { dataIndex: 'assignee', title: '执行人', width: 100 },
        ],
      },
      {
        title: '人员与时间',
        children: [
          { dataIndex: 'owner', title: '负责人', width: 100 },
          { dataIndex: 'updatedAt', title: '更新时间', width: 140 },
        ],
      },
    ]
    nextBaseColumns.push(buildExtraColumn())

    columnMap.clear()
    const result2 = getGroupColumns(nextBaseColumns, columnMap, columnWidth)
    const layout2 = updateColumnsWidth({
      containerWidth: 1200,
      dataColumns: result2.dataColumns,
      operations: [],
      fit: true,
      // 对齐 table.tsx：extra-column 钉死，不参与铺满容器的比例放大
      exactDataIndexes: [TABLE_EXTRA_COLUMN_KEY],
    })

    expect(layout2.columnRealWidth[TABLE_EXTRA_COLUMN_KEY]).toBe(28)
    expect(layout2.bodyWidth).toBe(1200)
  })

  it('keeps extra-column width after deleting a column from a group', () => {
    const columnMap = new Map<string, TableColumnData>()
    const columnWidth = reactive<Record<string, number>>({})

    const baseColumns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [
          { dataIndex: 'priority', title: '优先级', width: 150 },
          { dataIndex: 'bizLine', title: '业务线', width: 160 },
          { dataIndex: 'status', title: '状态', width: 140 },
        ],
      },
      {
        title: '人员与时间',
        children: [
          { dataIndex: 'owner', title: '负责人', width: 100 },
          { dataIndex: 'updatedAt', title: '更新时间', width: 140 },
        ],
      },
    ]
    baseColumns.push(buildExtraColumn())

    const result = getGroupColumns(baseColumns, columnMap, columnWidth)
    const layout1 = updateColumnsWidth({
      containerWidth: 1200,
      dataColumns: result.dataColumns,
      operations: [],
      fit: true,
      // 对齐 table.tsx：extra-column 钉死，不参与铺满容器的比例放大
      exactDataIndexes: [TABLE_EXTRA_COLUMN_KEY],
    })
    expect(layout1.columnRealWidth[TABLE_EXTRA_COLUMN_KEY]).toBe(28)
    // 全显式列宽之和小于容器 → 非钉死列按比例放大撑满容器（表格不缩小）
    expect(layout1.bodyWidth).toBe(1200)

    // delete bizLine
    const nextBaseColumns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [
          { dataIndex: 'priority', title: '优先级', width: 150 },
          { dataIndex: 'status', title: '状态', width: 140 },
        ],
      },
      {
        title: '人员与时间',
        children: [
          { dataIndex: 'owner', title: '负责人', width: 100 },
          { dataIndex: 'updatedAt', title: '更新时间', width: 140 },
        ],
      },
    ]
    nextBaseColumns.push(buildExtraColumn())

    columnMap.clear()
    const result2 = getGroupColumns(nextBaseColumns, columnMap, columnWidth)
    const layout2 = updateColumnsWidth({
      containerWidth: 1200,
      dataColumns: result2.dataColumns,
      operations: [],
      fit: true,
      // 对齐 table.tsx：extra-column 钉死，不参与铺满容器的比例放大
      exactDataIndexes: [TABLE_EXTRA_COLUMN_KEY],
    })
    expect(layout2.columnRealWidth[TABLE_EXTRA_COLUMN_KEY]).toBe(28)
    expect(layout2.bodyWidth).toBe(1200)

    // verify grouped header spans still align with leaf count
    const leafCountAfterInsert = result2.dataColumns.length
    const topRow = result2.groupColumns[0]
    const spanSum = topRow.reduce((sum, col) => sum + (col.colSpan ?? 1), 0)
    expect(spanSum).toBe(leafCountAfterInsert)
  })

  it('discards table runtime internal state when rebuilding columns', () => {
    const catalog: ColumnCatalog = [
      {
        title: '任务信息',
        key: 'task',
        children: [
          { dataIndex: 'priority', title: '优先级' },
          { dataIndex: 'bizLine', title: '业务线' },
        ],
      },
    ]

    const existingColumns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [
          {
            dataIndex: 'priority',
            title: '优先级',
            width: 150,
            // Table runtime state that should not survive a rebuild
            _resizeWidth: 999,
            _realWidth: 888,
            isLastLeftFixed: true,
            isFirstRightFixed: true,
            colSpan: 2,
            rowSpan: 2,
            index: 0,
          } as TableColumnData,
        ],
      },
    ]

    const result = buildColumnsResult({
      items: [{ dataIndex: 'priority' }],
      columns: existingColumns,
      catalog,
    })

    const leaf = result.columns[0].children?.[0]
    expect(leaf).toBeDefined()
    expect(leaf!.width).toBe(150)
    expect((leaf as any)._resizeWidth).toBeUndefined()
    expect((leaf as any)._realWidth).toBeUndefined()
    expect((leaf as any).isLastLeftFixed).toBeUndefined()
    expect((leaf as any).isFirstRightFixed).toBeUndefined()
    expect((leaf as any).colSpan).toBeUndefined()
    expect((leaf as any).rowSpan).toBeUndefined()
    expect((leaf as any).index).toBeUndefined()
    expect((leaf as any).parent).toBeUndefined()
  })

  it('uses catalog width for added columns and lets item width override it', () => {
    const catalog: ColumnCatalog = [
      {
        title: '任务信息',
        key: 'task',
        children: [
          { dataIndex: 'priority', title: '优先级' },
          { dataIndex: 'assignee', title: '执行人' },
        ],
      },
    ]

    const columns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [{ dataIndex: 'priority', title: '优先级', width: 150 }],
      },
    ]

    // catalog 是唯一列定义，新增列保留其中的宽度和其他扩展字段
    const added = buildColumnsResult({
      items: [{ dataIndex: 'priority' }, { dataIndex: 'assignee' }],
      prevKeys: ['priority'],
      insertAt: { dataIndex: 'priority', side: 'right' },
      columns,
      catalog,
      columnDefaults: { width: 100 },
      createColumn: (definition) => ({
        dataIndex: definition.dataIndex,
        title: definition.title,
        slotName: definition.dataIndex === 'assignee' ? 'assignee' : undefined,
      }),
    })
    const leaf = flattenTableColumns(added.columns).find((c) => c.dataIndex === 'assignee')
    expect(leaf?.width).toBe(100)
    expect(leaf?.slotName).toBe('assignee')

    // items[].width 是拖拽宽度的持久化覆盖
    const resized = buildColumnsResult({
      items: [{ dataIndex: 'priority' }, { dataIndex: 'assignee', width: 180 }],
      columns,
      catalog,
      columnDefaults: { width: 100 },
    })
    const resizedLeaf = flattenTableColumns(resized.columns).find((c) => c.dataIndex === 'assignee')
    expect(resizedLeaf?.width).toBe(180)
  })

  it('inherits fixed position from anchor column when inserting left/right', () => {
    const catalog: ColumnCatalog = [
      {
        title: '任务信息',
        key: 'task',
        children: [
          { dataIndex: 'priority', title: '优先级' },
          { dataIndex: 'bizLine', title: '业务线' },
          { dataIndex: 'status', title: '状态' },
        ],
      },
      {
        title: '其他',
        key: 'other',
        children: [
          { dataIndex: 'assignee', title: '执行人' },
          { dataIndex: 'remark', title: '备注' },
        ],
      },
    ]

    const columns: TableColumnData[] = [
      {
        title: '任务信息',
        children: [
          { dataIndex: 'priority', title: '优先级', fixed: 'left' },
          { dataIndex: 'bizLine', title: '业务线' },
          { dataIndex: 'status', title: '状态' },
        ],
      },
      {
        title: '其他',
        children: [{ dataIndex: 'remark', title: '备注', fixed: 'right' }],
      },
    ]

    // Insert to the left of a left-frozen anchor
    const leftResult = buildColumnsResult({
      items: [
        { dataIndex: 'priority', fixed: 'left' },
        { dataIndex: 'assignee', fixed: 'left' },
        { dataIndex: 'bizLine' },
        { dataIndex: 'status' },
        { dataIndex: 'remark', fixed: 'right' },
      ],
      prevKeys: ['priority', 'bizLine', 'status', 'remark'],
      insertAt: { dataIndex: 'priority', side: 'left' },
      columns,
      catalog,
    })
    const insertedLeft = flattenTableColumns(leftResult.columns).find((c) => c.dataIndex === 'assignee')
    expect(insertedLeft?.fixed).toBe('left')

    // Insert to the right of a right-frozen anchor
    const rightResult = buildColumnsResult({
      items: [
        { dataIndex: 'priority', fixed: 'left' },
        { dataIndex: 'bizLine' },
        { dataIndex: 'status' },
        { dataIndex: 'remark', fixed: 'right' },
        { dataIndex: 'assignee', fixed: 'right' },
      ],
      prevKeys: ['priority', 'bizLine', 'status', 'remark'],
      insertAt: { dataIndex: 'remark', side: 'right' },
      columns,
      catalog,
    })
    const insertedRight = flattenTableColumns(rightResult.columns).find((c) => c.dataIndex === 'assignee')
    expect(insertedRight?.fixed).toBe('right')
  })
})
