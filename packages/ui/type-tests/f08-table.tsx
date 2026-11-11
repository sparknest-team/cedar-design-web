import Table, { defineTableConfig, type TypedTableColumn as SubColumn } from '@cedar-design/ui-vue/table'
import { defineTableConfig as rootDefineTableConfig } from '@cedar-design/ui-vue'
import type { TableProps, TableDataPath, TypedTableColumn, TypedTableConfig, TableComponents, TableOperationColumn } from '@cedar-design/ui-vue'
import type { TableComponents as SubComponents, TableOperationColumn as SubOperationColumn } from '@cedar-design/ui-vue/table'

const operation: TableOperationColumn = { name: 'custom', render: row => String(row.key) }
const operationFromSubpath: SubOperationColumn = operation
const operations: TableComponents = { operations: ({ selection }) => selection ? [selection, operationFromSubpath] : [operation] }
const operationsFromSubpath: SubComponents = operations
void operationsFromSubpath

interface User {
  id: string
  name: string
  age: number
  profile?: { city: string }
  tags: { label: string }[]
  createdAt: Date
  children?: User[]
}
const users: User[] = [{ id: 'a', name: 'Alice', age: 20, tags: [{ label: 'Vue' }], createdAt: new Date() }]
const paths: TableDataPath<User>[] = ['name', 'profile.city', 'tags[0].label', 'tags.0.label', 'children[0].name']
const columns: TypedTableColumn<User>[] = [{ title: 'Group', children: [
  { dataIndex: 'name', render: ({ record, column }) => { const path: TableDataPath<User> | undefined = column.dataIndex; void path; return record.name.toUpperCase() } },
  { dataIndex: 'age', sortable: { sortDirections: ['ascend'], sorter: (a, b, extra) => { const path: TableDataPath<User> = extra.dataIndex; void path; return a.age - b.age } },
    filterable: { filters: [{ text: 'Adult', value: 'adult' }], filter: (values, record) => !values.length || record.age >= 18 },
    bodyCellStyle: row => ({ opacity: row.age >= 18 ? 1 : 0.5 }) },
]}]
const source: TypedTableConfig<User> = {
  rowKey: 'id', data: users, columns, pagination: { pageSize: 10 },
  expandable: { expandedRowRender: row => row.name, icon: (_expanded, row) => row.name },
  loadMore: (row, done) => done([{ ...row, id: 'child' }]),
  rowClass: row => row.age >= 18 ? 'adult' : 'minor',
  spanMethod: ({ record }) => ({ rowspan: record.age > 20 ? 1 : 2 }),
  summarySpanMethod: ({ record }) => ({ colspan: record.name.length > 0 ? 1 : 2 }),
  summary: ({ data }) => [{ ...users[0], id: 'summary', name: 'Total', age: data.reduce((sum, row) => sum + row.age, 0) }],
}
const config: TableProps = defineTableConfig<User>(source)
const rootConfig: TableProps = rootDefineTableConfig<User>({ rowKey: 'id', data: users, columns })
const subColumn: SubColumn<User> = columns[0]
const jsx = <Table {...config} />
// Existing wide props keep accepting runtime-defined/dynamic paths and automatic summaries.
const legacy: TableProps = { data: users, columns: [{ dataIndex: 'runtime.dynamic.path', render: ({ record }) => record.anyLegacyField }], summary: true }
// @ts-expect-error Misspelled top-level path.
const badPath: TypedTableColumn<User> = { dataIndex: 'naem' }
// @ts-expect-error Misspelled nested path.
const badNestedPath: TypedTableColumn<User> = { dataIndex: 'profile.ctiy' }
// @ts-expect-error Misspelled array member path.
const badArrayPath: TypedTableColumn<User> = { dataIndex: 'tags[0].labell' }
// @ts-expect-error Date methods are not nested data paths.
const badDatePath: TypedTableColumn<User> = { dataIndex: 'createdAt.toISOString' }
// @ts-expect-error A numeric business field has no toUpperCase().
const badRender: TypedTableColumn<User> = { render: ({ record }) => record.age.toUpperCase() }
// @ts-expect-error Grouped child columns use the same business row.
const badGrouped: TypedTableColumn<User> = { children: [{ dataIndex: 'naem' }] }
// @ts-expect-error Sorting arguments are business rows.
const badSort: TypedTableColumn<User> = { sortable: { sortDirections: ['ascend'], sorter: (a, b) => a.name - b.name } }
// @ts-expect-error Filtering receives the business row, not any.
const badFilter: TypedTableColumn<User> = { filterable: { filter: (_values, row) => row.missing } }
// @ts-expect-error Row identity must name a valid row field.
const badKey: TypedTableConfig<User> = { rowKey: 'uuid', data: users, columns }
// @ts-expect-error Date-valued fields cannot act as the row identity.
const badKeyType: TypedTableConfig<User> = { rowKey: 'createdAt', data: users, columns }
// @ts-expect-error Data must use the declared business row structure.
const badData = defineTableConfig<User>({ rowKey: 'id', columns, data: [{ id: 'x', name: 'Bob', age: '20', tags: [], createdAt: new Date() }] })
// @ts-expect-error Children cannot silently lose the business fields.
const badTree = defineTableConfig<User>({ rowKey: 'id', columns, data: [{ ...users[0], children: [{ key: 'other' }] }] })
// @ts-expect-error Implicit generated summaries are not guaranteed to be User rows.
const badSummary = defineTableConfig<User>({ rowKey: 'id', data: users, columns, summary: true })
// @ts-expect-error Custom summaries must return complete business rows.
const badSummaryRow = defineTableConfig<User>({ rowKey: 'id', data: users, columns, summary: () => [{ age: 100 }] })
// @ts-expect-error Lazy children must be complete business rows.
const badLazy = defineTableConfig<User>({ rowKey: 'id', data: users, columns, loadMore: (_row, done) => done([{ id: 'incomplete' }]) })
// @ts-expect-error Generic Table slots/emits are not part of this new configuration API.
const badSlotClaim: TypedTableConfig<User> = { rowKey: 'id', data: users, columns, onRowClick: (row: User) => row.name }
void [paths, rootConfig, subColumn, jsx, legacy, badPath, badNestedPath, badArrayPath, badDatePath, badRender, badGrouped, badSort, badFilter, badKey, badKeyType, badData, badTree, badSummary, badSummaryRow, badLazy, badSlotClaim]
