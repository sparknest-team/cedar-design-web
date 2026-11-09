import type { TableProps, TablePaginationConfig, PaginationProps, PeopleSelectOption, PeopleSelectProps, SelectValue, SelectProps, SelectInstance } from '@cedar-design/ui'
import type { TableColumnManagerInstance } from '@cedar-design/ui/table-column-manager'
import type { NotificationConfig, NotificationMethod } from '@cedar-design/ui'
import type { NotificationConfig as NotificationSubConfig } from '@cedar-design/ui/notification'

const notificationOptions: NotificationConfig = { content: 'Notice', closable: true, closeButtonAriaLabel: 'Dismiss' }
const notificationSubOptions: NotificationSubConfig = notificationOptions
function removeNotification(service: NotificationMethod) { service.remove('notice') }
void [notificationSubOptions, removeNotification]
import type { TreeInstance, TreeNodeData, FilterTreeNode, CheckedStrategy, LoadMore } from '@cedar-design/ui'
import type { FilterTreeNode as SubTreeFilter, CheckedStrategy as SubTreeStrategy } from '@cedar-design/ui/tree'

const treeFilter: FilterTreeNode = (node) => Boolean(node.label)
const subTreeFilter: SubTreeFilter = treeFilter
const treeStrategy: CheckedStrategy = 'parent'
const subTreeStrategy: SubTreeStrategy = treeStrategy
const treeLoader: LoadMore = async (_node) => {}
function acceptsTreeError(instance: TreeInstance, error: unknown, node: TreeNodeData) {
  instance.$emit('load-error', error, node)
}
void [subTreeFilter, subTreeStrategy, treeLoader, acceptsTreeError]

function acceptsColumnManagerErrors(instance: TableColumnManagerInstance, error: unknown) {
  instance.$emit('load-error', error, 'catalog')
  instance.$emit('load-error', error, 'search')
  // @ts-expect-error The error source is limited to catalog and search.
  instance.$emit('load-error', error, 'restore')
}
void acceptsColumnManagerErrors
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

import type { ResultProps as ResultRootProps, ResultStatus as ResultRootStatus } from '@cedar-design/ui'
import type { ResultProps as ResultSubProps, ResultStatus as ResultSubStatus } from '@cedar-design/ui/result'
const resultStatus: ResultRootStatus = '500'
const resultSubStatus: ResultSubStatus = resultStatus
const resultProps: ResultRootProps = { status: resultSubStatus, imageSize: 64, animation: false }
const resultSubProps: ResultSubProps = resultProps
// @ts-expect-error Invalid status is not accepted.
const invalidResultStatus: ResultRootStatus = 'offline'
void [resultSubProps, invalidResultStatus]

import type { PopconfirmBeforeConfirm, PopconfirmBeforeCancel, PopconfirmProps } from '@cedar-design/ui'
import type { PopconfirmProps as PopconfirmSubProps } from '@cedar-design/ui/popconfirm'
const confirmGuard: PopconfirmBeforeConfirm = ({ action }, done, { signal, event }) => {
  const name: 'confirm' = action
  void [name, signal, event]
  done(true)
}
const cancelGuard: PopconfirmBeforeCancel = ({ action }) => {
  const name: 'cancel' = action
  void name
  return Promise.resolve(true)
}
const popconfirmOptions: PopconfirmProps = { beforeConfirm: confirmGuard, beforeCancel: cancelGuard }
const popconfirmSubOptions: PopconfirmSubProps = popconfirmOptions
// @ts-expect-error Confirm payload cannot be used as a cancel guard.
const invalidCancelGuard: PopconfirmBeforeCancel = confirmGuard
void [popconfirmSubOptions, invalidCancelGuard]

import type { TooltipOptions } from '@cedar-design/ui'
import type { TooltipOptions as TooltipSubOptions } from '@cedar-design/ui/tooltip'
const tooltipOptions: TooltipOptions = { content: 'Help', placement: 'bottom' }
const tooltipSubOptions: TooltipSubOptions = tooltipOptions
// @ts-expect-error The directive requires textual content.
const invalidTooltipOptions: TooltipOptions = { placement: 'top' }
void [tooltipSubOptions, invalidTooltipOptions]

import type { PopoverInstance as PopoverRootInstance, PopoverProps as PopoverRootProps } from '@cedar-design/ui'
import type { PopoverInstance as PopoverSubInstance } from '@cedar-design/ui/popover'
const popoverSettings: PopoverRootProps = { content: 'Details', autoFitTransformOrigin: false, animationName: 'custom' }
function popoverApi(instance: PopoverRootInstance, reference: HTMLElement) {
  instance.open()
  instance.close()
  instance.resize()
  instance.allowClose()
  instance.getReference()
  instance.focusReference()
  instance.setReference(reference)
  const sub: PopoverSubInstance = instance
  // @ts-expect-error The wrapper does not expose Trigger's internal top-layer check.
  instance.isTopLayer()
  return sub
}
void [popoverSettings, popoverApi]

import { useHoverOverlay, hoverOverlayProps } from '@cedar-design/ui'
import type { HoverOverlayProps } from '@cedar-design/ui/hover'
const hoverOverlayConfig: HoverOverlayProps = { hovering: true, focusing: false }
const hoverHelpers = useHoverOverlay()
hoverHelpers.handleHovering(true)
const hoverState: boolean = hoverHelpers.hovering.value
void [hoverOverlayConfig, hoverOverlayProps, hoverState]
