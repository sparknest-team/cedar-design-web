import type { CSSProperties, VNodeChild } from 'vue'
import type { TableColumnData, TableData } from '../types'

export type TableCoreData = TableData

/** Data rendering and layout only; feature configuration is composed separately. */
export interface TableCoreColumn extends Pick<TableColumnData,
  'dataIndex' | 'title' | 'width' | 'minWidth' | 'fixed' | 'align' | 'ellipsis' |
  'cellClass' | 'headerCellClass' | 'cellStyle' | 'headerCellStyle' | 'slotName' | 'titleSlotName'> {
  children?: TableCoreColumn[]
  render?: (scope: TableCoreCellScope) => VNodeChild
  bodyCellClass?: string | Record<string, boolean> | ((record: TableCoreData) => unknown)
  bodyCellStyle?: CSSProperties | ((record: TableCoreData) => CSSProperties)
}

export interface TableCoreCellScope {
  record: TableCoreData
  column: TableCoreColumn
  rowIndex: number
}

export interface TableCoreHeaderScope { column: TableCoreColumn }

export interface TableCoreExpose {
  /** Native physical scroll coordinates, as with HTMLElement.scrollTo. */
  scrollTo: (options: ScrollToOptions) => void
}
