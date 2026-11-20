// @vitest-environment node
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, test } from 'vitest'
import { calculateColumnWidths } from '../kernel/column-widths'
import { frozenColumnOffset, operationFixedOffset, operationStickyOffset } from '../kernel/frozen-columns'

describe('pure Table layout kernel', () => {
  test('allocates remaining pixels without mutating frozen inputs', () => {
    const columns = Object.freeze([
      Object.freeze({ key: 'id', dataIndex: 'id', width: 81 }),
      Object.freeze({ key: 'name', dataIndex: 'name', minWidth: 50 }),
      Object.freeze({ key: 'status', dataIndex: 'status', minWidth: 80 }),
    ])
    const result = calculateColumnWidths(Object.freeze({ containerWidth: 601, dataColumns: columns, operations: Object.freeze([]), fit: true }))
    expect(result.columnRealWidth).toEqual({ id: 81, name: 200, status: 320 })
    expect(result.bodyWidth).toBe(601)
    expect(result.hasHorizontalOverflow).toBe(false)
    expect(result.widthUpdates).toEqual([{ index: 2, width: 320 }, { index: 1, width: 200 }, { index: 0, width: 81 }])
    expect(columns.every(column => !Object.hasOwn(column, '_realWidth'))).toBe(true)
  })

  test('preserves overflow, zero-width initialization and exact columns', () => {
    const dataColumns = [{ key: 'name', dataIndex: 'name', width: 100 }, { key: 'score', dataIndex: 'score', width: 200 }, { key: 'extra', dataIndex: 'extra', width: 28, exact: true }]
    expect(calculateColumnWidths({ containerWidth: 1000, dataColumns, operations: [], fit: false }).columnRealWidth).toEqual({ name: 324, score: 648, extra: 28 })
    expect(calculateColumnWidths({ containerWidth: 200, dataColumns, operations: [], fit: true })).toMatchObject({ bodyWidth: 328, hasHorizontalOverflow: true })
    expect(calculateColumnWidths({ containerWidth: 0, dataColumns, operations: [{ width: 0 }, {}], fit: true })).toMatchObject({ bodyWidth: 368, hasHorizontalOverflow: false })
  })

  test('uses measured auto widths and preserves physical frozen sides', () => {
    const left = Object.freeze({ dataIndex: 'a', fixed: 'left' as const, width: 80, _realWidth: 91, _resizeWidth: 300 })
    const next = Object.freeze({ dataIndex: 'b', fixed: 'left' as const, width: 90 })
    const right = Object.freeze({ dataIndex: 'r', fixed: 'right' as const, width: 70 })
    const dataColumns = Object.freeze([left, next, right])
    const operations = Object.freeze([Object.freeze({ name: 'selection', fixed: true, width: 40, _realWidth: 53 })])
    const context = { dataColumns, operations, keyOf: (column: { dataIndex?: string }) => column.dataIndex }
    expect(frozenColumnOffset(next, context, 'auto')).toBe(144)
    expect(frozenColumnOffset(next, context, 'fixed')).toBe(353)
    expect(frozenColumnOffset(left, context, 'auto', 'rtl')).toBe(90)
    expect(frozenColumnOffset({ children: [left, next], fixed: 'left' }, context, 'auto', 'rtl')).toBe(0)
    expect(frozenColumnOffset(right, context, 'auto')).toBe(0)
    expect(operationStickyOffset(operations[0], operations, 'rtl', dataColumns, 'auto')).toBe(181)
  })

  test('operation offsets retain zero widths and duplicate-name lookup behavior', () => {
    const operations = [{ name: 'selection', width: 0 }, { name: 'expand', width: 40, _realWidth: 57 }, { name: 'selection', width: 80 }]
    expect(operationFixedOffset(operations[1], operations)).toBe(0)
    expect(operationFixedOffset(operations[2], operations)).toBe(0)
    expect(operationFixedOffset({ name: 'missing' }, operations)).toBe(0)
  })

  test('kernel modules stay free of Vue, DOM and component dependencies', () => {
    for (const name of ['column-widths', 'frozen-columns']) {
      const source = readFileSync(resolve(import.meta.dirname, `../kernel/${name}.ts`), 'utf8')
      expect(source).not.toMatch(/^\s*import\s/m)
      expect(source).not.toMatch(/\b(?:window|document|HTMLElement|ResizeObserver)\b/)
    }
  })
})
