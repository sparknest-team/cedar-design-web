import { isNumber } from '../../_utils/is'
import type { TableColumnData, TableOperationColumn } from '../types'

export const DEFAULT_COLUMN_MIN_WIDTH = 80
export const DEFAULT_OPERATION_WIDTH = 40

export interface ColumnsLayoutResult {
  scrollX: boolean
  bodyWidth: number
  columnRealWidth: Record<string, number>
}

/**
 * Element Plus 风格列宽分配：
 * - 有 width（或拖拽宽度）→ 固定列
 * - 无 width → 弹性列，按 minWidth（默认 80）比例分配剩余空间
 * - 列最小宽之和超过容器 → 开启横向滚动
 */
export const updateColumnsWidth = ({
  containerWidth,
  dataColumns,
  operations,
  fit,
}: {
  containerWidth: number
  dataColumns: TableColumnData[]
  operations: TableOperationColumn[]
  fit: boolean
}): ColumnsLayoutResult => {
  const columnRealWidth: Record<string, number> = {}
  let operationsWidth = 0

  for (const item of operations) {
    operationsWidth += item.width ?? DEFAULT_OPERATION_WIDTH
  }

  if (!containerWidth || dataColumns.length === 0) {
    let bodyMinWidth = operationsWidth
    for (const column of dataColumns) {
      const dataIndex = column.dataIndex
      if (!dataIndex) continue
      const width = column._resizeWidth ?? column.width ?? column.minWidth ?? DEFAULT_COLUMN_MIN_WIDTH
      columnRealWidth[dataIndex] = width
      column._realWidth = width
      bodyMinWidth += width
    }
    return {
      scrollX: false,
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
          columnRealWidth[column.dataIndex] = minWidth + totalFlexWidth
          column._realWidth = columnRealWidth[column.dataIndex]
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
            columnRealWidth[column.dataIndex] = minWidth + flexWidth
            column._realWidth = columnRealWidth[column.dataIndex]
          }
        })

        const first = flexColumns[0]
        const firstMinWidth = Number(first.minWidth || DEFAULT_COLUMN_MIN_WIDTH)
        if (first.dataIndex) {
          columnRealWidth[first.dataIndex] = firstMinWidth + totalFlexWidth - noneFirstWidth
          first._realWidth = columnRealWidth[first.dataIndex]
        }
      }

      for (const column of dataColumns) {
        if (!column.dataIndex || columnRealWidth[column.dataIndex]) continue
        const width = column._resizeWidth ?? column.width!
        columnRealWidth[column.dataIndex] = width
        column._realWidth = width
      }

      return {
        scrollX: false,
        bodyWidth: Math.max(bodyMinWidth, containerWidth),
        columnRealWidth,
      }
    }

    for (const column of flexColumns) {
      const width = Number(column.minWidth || DEFAULT_COLUMN_MIN_WIDTH)
      if (column.dataIndex) {
        columnRealWidth[column.dataIndex] = width
        column._realWidth = width
      }
    }
    for (const column of dataColumns) {
      if (!column.dataIndex || columnRealWidth[column.dataIndex]) continue
      const width = column._resizeWidth ?? column.width!
      columnRealWidth[column.dataIndex] = width
      column._realWidth = width
    }

    return {
      scrollX: true,
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
      columnRealWidth[column.dataIndex] = width
      column._realWidth = width
    }
    bodyMinWidth += width
  }

  return {
    scrollX: bodyMinWidth > containerWidth,
    bodyWidth: bodyMinWidth,
    columnRealWidth,
  }
}
