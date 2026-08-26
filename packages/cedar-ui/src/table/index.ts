import { withInstall } from '../_utils/global-config'
import _Table from './table'
import _Thead from './table-thead'
import _Tbody from './table-tbody'
import _Tr from './table-tr'
import _Th from './table-th'
import _Td from './table-td'
import _Column from './table-column'
import { tableProps } from './props'

const Table = withInstall(_Table, Object.assign(_Table, {
  Thead: _Thead,
  Tbody: _Tbody,
  Tr: _Tr,
  Th: _Th,
  Td: _Td,
  Column: _Column,
}), { components: [_Table, _Thead, _Tbody, _Tr, _Th, _Td, _Column] })

export type TableInstance = InstanceType<typeof _Table>
export type TheadInstance = InstanceType<typeof _Thead>
export type TbodyInstance = InstanceType<typeof _Tbody>
export type TrInstance = InstanceType<typeof _Tr>
export type ThInstance = InstanceType<typeof _Th>
export type TdInstance = InstanceType<typeof _Td>
export type TableColumnInstance = InstanceType<typeof _Column>

export type {
  TableData,
  TableSortable,
  TableFilterData,
  TableFilterable,
  TableColumnData,
  TableBorder,
  TableRowSelection,
  TableExpandable,
  TableDraggable,
  TableChangeExtra,
} from './types'
export type { TableExtraColumnConfig } from './extra-column'
export { TABLE_EXTRA_COLUMN_KEY, resolveExtraColumnConfig, getExtraColumnWidth, DEFAULT_EXTRA_COLUMN_WIDTH } from './extra-column'

export { _Thead as Thead, _Tbody as Tbody, _Tr as Tr, _Th as Th, _Td as Td, _Column as TableColumn }

export const _TableComponent = Table

export { Table }

export { tableProps }

export default Table
