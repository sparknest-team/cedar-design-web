import { withInstall } from '../../_utils/global-config'
import _TableCore from './TableCore.vue'
export { tableCoreProps } from './props'
export type { TableCoreProps } from './props'
export type { TableCoreColumn, TableCoreData, TableCoreCellScope, TableCoreHeaderScope } from './types'
export type TableCoreInstance = InstanceType<typeof _TableCore>
export const TableCore = withInstall(_TableCore)
export const _TableCoreComponent = TableCore
export default TableCore
