import type { TableProps, TablePaginationConfig, PaginationProps, PeopleSelectOption, PeopleSelectProps, SelectValue, SelectProps, SelectInstance } from '@cedar-design/ui'
const table: TableProps = { pagination: { pageSize: 20 } }
const remote: TablePaginationConfig = { total: 1000, pageSize: 20 }
const oldPagination: PaginationProps = { total: 100, pageSize: 10 }
const legacy: TableProps = { pagination: oldPagination }
// @ts-expect-error Standalone Pagination still needs total.
const missingTotal: PaginationProps = {}
// @ts-expect-error Table does not accept a nonnumeric total.
const badTotal: TablePaginationConfig = { total: '100' }
const options: readonly PeopleSelectOption[] = [{ value: 'id', label: 'Alice' }]
const people: PeopleSelectProps = { options, loading: false }
// Loader functions are accepted directly in options.
const asyncPeople: PeopleSelectProps = { options: async () => [] }
// @ts-expect-error Transport injection has been removed from PeopleSelect.
const oldPeople: PeopleSelectProps = { fetch: async () => [] }
void [table, remote, legacy, missingTotal, badTotal, options, people, asyncPeople, oldPeople]
const cleared: SelectValue = undefined
const empty: SelectValue = ''
const multiple: SelectValue = [false, 0, { id: 'a' }]
const select: SelectProps = { modelValue: cleared, emptyValue: () => undefined }
function acceptsClear(instance: SelectInstance) {
  instance.$emit('change', cleared)
  instance.$emit('update:modelValue', cleared)
}
// @ts-expect-error Dates/functions are not part of the Select scalar value contract.
const invalid: SelectValue = () => 1
void [empty, multiple, select, acceptsClear, invalid]
