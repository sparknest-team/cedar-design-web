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
  ColumnManagerInsertAt,
  ColumnManagerLayoutNode,
  ColumnManagerResult,
  ColumnManagerState,
} from './types'
export type { ColumnEditInput } from './utils'
export {
  applyInsertAt,
  applyInsertToLayout,
  applyColumnEdit,
  applyColumnFixed,
  buildColumnsFromState,
  buildColumnsResult,
  catalogToOptions,
  findLeafColumn,
  flattenCatalog,
  flattenTableColumns,
  getColumnEditInitialValues,
  getLeafGroupTitles,
  groupKeyFromTitle,
  layoutFromColumns,
  mapLeafColumns,
  mergeLayoutByAdjacentGroupTitles,
  stateFromColumns,
} from './utils'

export { TableColumnManager }

export const _TableColumnManagerComponent = TableColumnManager

export default TableColumnManager
