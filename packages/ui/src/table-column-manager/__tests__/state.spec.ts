import { describe, expect, it } from 'vitest'
import type { ColumnCatalog } from '../types'
import { normalizeColumnManagerState, stateFromCatalog, stateFromColumns } from '../utils'

const catalog: ColumnCatalog = [
  { dataIndex: 'required', title: '必选列', required: true },
  { dataIndex: 'name', title: '名称' },
  { dataIndex: 'status', title: '状态' },
]

const defaultColumns = [
  { dataIndex: 'required', title: '必选列', width: 120, fixed: 'left' as const },
  { dataIndex: 'name', title: '名称', width: 160 },
]

describe('column manager persisted state', () => {
  it('treats lightweight definitions as selectable items only', () => {
    const state = stateFromCatalog([
      { dataIndex: 'id', title: '编号', required: true },
      { dataIndex: 'name', title: '名称' },
      { dataIndex: 'remark', title: '备注' },
    ])
    expect(state.items).toEqual([{ dataIndex: 'id' }, { dataIndex: 'name' }, { dataIndex: 'remark' }])
  })

  it('stores only title and width overrides', () => {
    expect(stateFromColumns(defaultColumns, catalog)).toEqual({
      version: 2,
      items: [{ dataIndex: 'required', fixed: 'left' }, { dataIndex: 'name' }],
      layout: [
        { type: 'leaf', dataIndex: 'required' },
        { type: 'leaf', dataIndex: 'name' },
      ],
    })

    expect(
      stateFromColumns([defaultColumns[0], { dataIndex: 'name', title: '用户名称', width: 180 }], catalog, {
        widthKeys: new Set(['name']),
      })
    ).toEqual({
      version: 2,
      items: [
        { dataIndex: 'required', fixed: 'left' },
        { dataIndex: 'name', title: '用户名称', width: 180 },
      ],
      layout: [
        { type: 'leaf', dataIndex: 'required' },
        { type: 'leaf', dataIndex: 'name' },
      ],
    })
  })

  it('normalizes cache and adds missing required columns', () => {
    expect(
      normalizeColumnManagerState({
        state: {
          version: 2,
          items: [
            { dataIndex: 'name', title: '名称', width: 200 },
            { dataIndex: 'name' },
            { dataIndex: 'removed' },
            { dataIndex: 'status', fixed: 'invalid' },
          ],
          layout: [{ type: 'group', key: 'group', title: '分组', children: ['name', 'removed'] }],
        },
        catalog,
        defaultState: {
          items: [{ dataIndex: 'required', fixed: 'left' }, { dataIndex: 'name' }, { dataIndex: 'status' }],
        },
      })
    ).toEqual({
      version: 2,
      items: [{ dataIndex: 'required', fixed: 'left' }, { dataIndex: 'name', width: 200 }, { dataIndex: 'status' }],
      layout: [{ type: 'group', key: 'group', title: '分组', children: ['name'] }],
    })
  })

  it('falls back to defaults for an incompatible version', () => {
    const result = normalizeColumnManagerState({
      state: { version: 0, items: [{ dataIndex: 'status' }] },
      catalog,
    })
    expect(result.items.map((item) => item.dataIndex)).toEqual(['required', 'name', 'status'])
  })
})
