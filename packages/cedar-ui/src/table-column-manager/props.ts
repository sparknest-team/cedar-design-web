import type { TableColumnData } from '../table/types'
import type { ColumnCatalog, ColumnCatalogItem, ColumnManagerInsertAt, ColumnManagerItem } from './types'

export interface TableColumnManagerProps {
  modelValue?: ColumnManagerItem[]
  defaultValue?: ColumnManagerItem[]
  placeholder?: string
  /** 当前表格列（含 title/render，确认时拼回） */
  columns?: TableColumnData[]
  /** 默认列注册表，用于重新添加已隐藏默认列时恢复 render/slot/width。 */
  registryColumns?: TableColumnData[]
  /** 新添加普通列的默认 Table 属性。 */
  columnDefaults?: Partial<TableColumnData>
  /** 将轻量候选定义转换成特殊 Table 列。 */
  createColumn?: (definition: ColumnCatalogItem) => TableColumnData
  /** 左侧可选列目录 */
  options?: ColumnCatalog
  /** 打开时异步加载目录 */
  loadOptions?: () => Promise<ColumnCatalog>
  remoteSearch?: (searchValue: string) => Promise<void>
  /** 值不在目录中时反显 */
  fallbackItem?: (dataIndex: string) => ColumnCatalogItem | undefined
  /** 向左/向右插入时的上下文，影响 getResult 中新增列的落点 */
  insertAt?: ColumnManagerInsertAt
  /** 列管理抽屉是否可见（v-model:open） */
  open?: boolean
  /** 抽屉标题 */
  drawerTitle?: string
  /** 抽屉宽度 */
  drawerWidth?: number | string
}

export interface TableColumnManagerDrawerProps extends TableColumnManagerProps {
  inline?: boolean
}
