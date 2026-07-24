import type { TableColumnData } from '../table/types'
import type { ColumnCatalog, ColumnCatalogItem, ColumnManagerInsertAt } from './types'

export interface TableColumnManagerProps {
  modelValue?: string[]
  defaultValue?: string[]
  placeholder?: string
  /** 当前表格列（含 title/render，确认时拼回） */
  columns?: TableColumnData[]
  /** 左侧可选列目录 */
  options?: ColumnCatalog
  /** 打开时异步加载目录 */
  loadOptions?: () => Promise<ColumnCatalog>
  remoteSearch?: (searchValue: string) => Promise<void>
  /** 值不在目录中时反显 */
  fallbackItem?: (dataIndex: string) => ColumnCatalogItem | undefined
  fixedMap?: Record<string, 'left' | 'right'>
  defaultFixedMap?: Record<string, 'left' | 'right'>
  /** 自定义列标题（覆盖 catalog） */
  titleMap?: Record<string, string>
  requiredKeys?: string[]
  /** 向左/向右插入时的上下文，影响 getResult 中新增列的落点 */
  insertAt?: ColumnManagerInsertAt
}
