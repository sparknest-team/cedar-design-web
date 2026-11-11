import { withInstall } from '../_utils/global-config'
import _TableColumnManager from './TableColumnManager.vue'

const TableColumnManager = withInstall(_TableColumnManager)

export type TableColumnManagerInstance = InstanceType<typeof _TableColumnManager>
export type { TableColumnManagerProps, TableColumnManagerDrawerProps } from './props'
export type {
  ColumnCatalog,
  ColumnCatalogGroup,
  ColumnCatalogItem,
  ColumnDefinition,
  ColumnDefinitionGroup,
  ColumnDefinitions,
  ColumnDefinitionSearchParams,
  ColumnDefinitionSearchResult,
  ColumnDefinitionSource,
  ManagedTableColumn,
  ColumnManagerMeta,
  ColumnManagerInsertAt,
  ColumnManagerDefaultState,
  ColumnManagerItem,
  ColumnManagerLayoutNode,
  ColumnManagerResult,
  ColumnManagerState,
} from './types'
export { COLUMN_MANAGER_STATE_VERSION } from './types'
export type { ColumnEditInput } from './utils'
export {
  applyInsertAt,
  applyInsertToLayout,
  applyColumnEdit,
  applyColumnFixed,
  buildColumnsFromState,
  buildColumnsResult,
  findLeafColumn,
  flattenCatalog,
  flattenTableColumns,
  getColumnEditInitialValues,
  getLeafGroupTitles,
  groupKeyFromTitle,
  layoutFromColumns,
  mapLeafColumns,
  mergeLayoutByAdjacentGroupTitles,
  normalizeColumnManagerState,
  stateFromCatalog,
  stateFromColumns,
} from './utils'

export { useTableColumnManager } from './use-table-column-manager'
export type {
  UseTableColumnManagerOptions,
  UseTableColumnManagerReturn,
  EditColumnState,
  InsertColumnContext,
  HeaderActionKey,
  TableColumnManagerBindings,
  TableColumnManagerExposed,
  TableColumnHeaderActionBindings,
} from './use-table-column-manager'

export { TableColumnManager }

export const _TableColumnManagerComponent = TableColumnManager

export default TableColumnManager
