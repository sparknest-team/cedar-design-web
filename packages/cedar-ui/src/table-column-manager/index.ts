import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _TableColumnManager from './table-column-manager.vue'

const TableColumnManager = Object.assign(_TableColumnManager, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _TableColumnManager.name, _TableColumnManager)
  },
})

export type TableColumnManagerInstance = InstanceType<typeof _TableColumnManager>
export type { TableColumnManagerProps } from './props'
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
