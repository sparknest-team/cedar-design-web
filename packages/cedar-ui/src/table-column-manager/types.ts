import type { VNode } from 'vue'
import type { TableColumnData } from '../table/types'

export type ColumnCatalogItem = {
  dataIndex: string
  title: string
  required?: boolean
  disabled?: boolean
  tip?: string | (() => VNode | string)
  fixed?: 'left' | 'right'
  /** 拼回 Table 列时的扩展字段 */
  column?: Partial<TableColumnData>
}

export type ColumnCatalogGroup = {
  label: string
  key: string
  children: ColumnCatalogItem[]
}

export type ColumnCatalog = (ColumnCatalogGroup | ColumnCatalogItem)[]

/**
 * 顶层列布局节点（持久化分组结构 + 组名）。
 * - leaf：独立顶层列
 * - group：分组表头及其子叶子 dataIndex 顺序
 */
export type ColumnManagerLayoutNode =
  | { type: 'leaf'; dataIndex: string }
  | { type: 'group'; key: string; title: string; children: string[] }

/**
 * 列管理记忆状态（可整体存服务端）。
 * keys / fixedMap 为必选；其余字段按需出现。
 */
export type ColumnManagerState = {
  /** 叶子列显隐与顺序（扁平展开序） */
  keys: string[]
  /** 叶子列冻结 */
  fixedMap: Record<string, 'left' | 'right'>
  /** 叶子列宽 */
  widthMap?: Record<string, number>
  /** 叶子列自定义标题（覆盖 catalog 默认 title） */
  titleMap?: Record<string, string>
  /**
   * 顶层布局快照（含分组与组名）。
   * 有值时优先按此恢复；重建时也会参考其分组归属与组标题。
   */
  layout?: ColumnManagerLayoutNode[]
}

export type ColumnManagerResult = ColumnManagerState & {
  columns: TableColumnData[]
}

export type ColumnManagerInsertAt = {
  dataIndex: string
  side: 'left' | 'right'
}
