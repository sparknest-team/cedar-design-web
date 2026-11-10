import { isNumber } from '../../_utils/is'
import type { TableColumnData, TableOperationColumn } from '../types'
import { getColumnLayoutKey, isTableExtraColumn } from '../extra-column'

export const DEFAULT_COLUMN_MIN_WIDTH = 80
export const DEFAULT_OPERATION_WIDTH = 40

export interface ColumnsLayoutResult {
  hasHorizontalOverflow: boolean
  bodyWidth: number
  columnRealWidth: Record<string, number>
}

/**
 * Element Plus 风格列宽分配：
 * - 有 width（或拖拽宽度）→ 固定列
 * - 无 width → 弹性列：fit=true 时按 minWidth（默认 80）比例吸收剩余空间
 * - 列最小宽之和超过容器 → 开启横向滚动
 * - 列宽之和不足容器 → 剩余空间按各列基础宽度比例放大撑满（与 fit 无关；
 *   exactDataIndexes 中的钉死列如 extra-column 不参与放大，保持原宽）
 */
export const updateColumnsWidth = ({
  containerWidth,
  dataColumns,
  operations,
  fit,
  exactDataIndexes,
}: {
  containerWidth: number
  dataColumns: TableColumnData[]
  operations: TableOperationColumn[]
  fit: boolean
  /** 钉死列（如 extra-column）的 dataIndex：任何情况下都保持显式宽度，不参与放大 */
  exactDataIndexes?: string[]
}): ColumnsLayoutResult => {
  const columnRealWidth: Record<string, number> = {}
  let operationsWidth = 0

  for (const item of operations) {
    operationsWidth += item.width ?? DEFAULT_OPERATION_WIDTH
  }

  if (!containerWidth || dataColumns.length === 0) {
    let bodyMinWidth = operationsWidth
    for (const column of dataColumns) {
      const dataIndex = getColumnLayoutKey(column)
      if (!dataIndex) continue
      const width = column._resizeWidth ?? column.width ?? column.minWidth ?? DEFAULT_COLUMN_MIN_WIDTH
      columnRealWidth[dataIndex] = width
      column._realWidth = width
      bodyMinWidth += width
    }
    return {
      hasHorizontalOverflow: false,
      bodyWidth: bodyMinWidth,
      columnRealWidth,
    }
  }

  const flexColumns = dataColumns.filter((column) => {
    if (isNumber(column._resizeWidth)) return false
    return !isNumber(column.width)
  })

  let bodyMinWidth = operationsWidth

  if (flexColumns.length > 0 && fit) {
    for (const column of dataColumns) {
      if (isNumber(column._resizeWidth)) {
        bodyMinWidth += column._resizeWidth
      } else {
        bodyMinWidth += Number(column.width || column.minWidth || DEFAULT_COLUMN_MIN_WIDTH)
      }
    }

    if (bodyMinWidth <= containerWidth) {
      const totalFlexWidth = containerWidth - bodyMinWidth

      if (flexColumns.length === 1) {
        const column = flexColumns[0]
        const minWidth = Number(column.minWidth || DEFAULT_COLUMN_MIN_WIDTH)
        if (column.dataIndex) {
          columnRealWidth[getColumnLayoutKey(column)!] = minWidth + totalFlexWidth
          column._realWidth = columnRealWidth[getColumnLayoutKey(column)!]
        }
      } else {
        const allColumnsWidth = flexColumns.reduce(
          (prev, column) => prev + Number(column.minWidth || DEFAULT_COLUMN_MIN_WIDTH),
          0,
        )
        const flexWidthPerPixel = totalFlexWidth / allColumnsWidth
        let noneFirstWidth = 0

        flexColumns.forEach((column, index) => {
          if (index === 0) return
          const minWidth = Number(column.minWidth || DEFAULT_COLUMN_MIN_WIDTH)
          const flexWidth = Math.floor(minWidth * flexWidthPerPixel)
          noneFirstWidth += flexWidth
          if (column.dataIndex) {
            columnRealWidth[getColumnLayoutKey(column)!] = minWidth + flexWidth
            column._realWidth = columnRealWidth[getColumnLayoutKey(column)!]
          }
        })

        const first = flexColumns[0]
        const firstMinWidth = Number(first.minWidth || DEFAULT_COLUMN_MIN_WIDTH)
        if (first.dataIndex) {
          columnRealWidth[getColumnLayoutKey(first)!] = firstMinWidth + totalFlexWidth - noneFirstWidth
          first._realWidth = columnRealWidth[getColumnLayoutKey(first)!]
        }
      }

      for (const column of dataColumns) {
        if (!column.dataIndex || columnRealWidth[getColumnLayoutKey(column)!]) continue
        const width = column._resizeWidth ?? column.width!
        columnRealWidth[getColumnLayoutKey(column)!] = width
        column._realWidth = width
      }

      return {
        hasHorizontalOverflow: false,
        bodyWidth: Math.max(bodyMinWidth, containerWidth),
        columnRealWidth,
      }
    }

    for (const column of flexColumns) {
      const width = Number(column.minWidth || DEFAULT_COLUMN_MIN_WIDTH)
      if (column.dataIndex) {
        columnRealWidth[getColumnLayoutKey(column)!] = width
        column._realWidth = width
      }
    }
    for (const column of dataColumns) {
      if (!column.dataIndex || columnRealWidth[getColumnLayoutKey(column)!]) continue
      const width = column._resizeWidth ?? column.width!
      columnRealWidth[getColumnLayoutKey(column)!] = width
      column._realWidth = width
    }

    return {
      hasHorizontalOverflow: true,
      bodyWidth: bodyMinWidth,
      columnRealWidth,
    }
  }

  for (const column of dataColumns) {
    let width: number
    if (isNumber(column._resizeWidth)) {
      width = column._resizeWidth
    } else if (!column.width && !column.minWidth) {
      width = DEFAULT_COLUMN_MIN_WIDTH
    } else {
      width = Number(column.width || column.minWidth)
    }
    if (column.dataIndex) {
      columnRealWidth[getColumnLayoutKey(column)!] = width
      column._realWidth = width
    }
    bodyMinWidth += width
  }

  // 列宽之和不足容器：剩余空间按各列基础宽度比例放大（钉死列保持原宽），
  // 保证表格至少铺满父容器宽度——与 fit 无关，fit 只决定有弹性列时剩余空间
  // 是全给弹性列（fit=true，显式 width 的列保持原宽）还是按比例分摊（fit=false）。
  // element 在 fit=false 时表格缩为列宽之和，cedar 按业务要求不缩。
  if (bodyMinWidth < containerWidth) {
    const scalable = dataColumns.filter(
      (column) => column.dataIndex && !isTableExtraColumn(column) &&
        (!exactDataIndexes?.includes(column.dataIndex) || dataColumns.some(other => isTableExtraColumn(other) && other.dataIndex === column.dataIndex)),
    )
    const totalBase = scalable.reduce(
      (prev, column) => prev + columnRealWidth[getColumnLayoutKey(column)!],
      0,
    )
    if (scalable.length > 0 && totalBase > 0) {
      const leftover = containerWidth - bodyMinWidth
      let assigned = 0
      scalable.forEach((column, index) => {
        const key = getColumnLayoutKey(column)!
        if (index === scalable.length - 1) {
          columnRealWidth[key] += leftover - assigned
        } else {
          const share = Math.floor((leftover * columnRealWidth[key]) / totalBase)
          columnRealWidth[key] += share
          assigned += share
        }
        column._realWidth = columnRealWidth[key]
      })
      return {
        hasHorizontalOverflow: false,
        bodyWidth: containerWidth,
        columnRealWidth,
      }
    }
  }

  return {
    hasHorizontalOverflow: bodyMinWidth > containerWidth,
    bodyWidth: bodyMinWidth,
    columnRealWidth,
  }
}
