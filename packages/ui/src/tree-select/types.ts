import type { VNodeChild } from 'vue'
import type { TreeNodeData, TreeNodeValue } from '../tree/types'

export interface TreeSelectLabelValue {
  value: TreeNodeValue
  label: string | number
}

export type TreeSelectValue = null | TreeNodeValue | TreeNodeValue[] | TreeSelectLabelValue | TreeSelectLabelValue[]

export type FilterTreeNode = (searchKey: string, nodeData: TreeNodeData) => boolean

export type FallbackOption = boolean | ((value: TreeNodeValue) => TreeNodeData)

export type ChangeHandler = (selectedValue: TreeSelectValue | undefined) => void

export type OpenChangeHandler = (open: boolean) => void

export type SearchHandler = (searchKey: string) => void

export type ClearHandler = () => void

export type TreeSelectProps = import('vue').ExtractPublicPropTypes<typeof import('./props').treeSelectProps>
export interface TreeSelectReadScope {
  value: TreeSelectValue | undefined
  text: string
}
export interface TreeSelectNodeStatus {
  loading: boolean
  checked: boolean
  selected: boolean
  indeterminate: boolean
  expanded: boolean
  isLeaf: boolean
}
export type TreeSelectEmits = {
  [Event in keyof typeof import('./emits').treeSelectEmits]: Parameters<
    (typeof import('./emits').treeSelectEmits)[Event]
  >
}
export interface TreeSelectSlots {
  read?(scope: TreeSelectReadScope): VNodeChild
  trigger?(): VNodeChild
  prefix?(): VNodeChild
  suffix?(): VNodeChild
  selected?(): VNodeChild
  label?(scope: { data: import('../_components/selection-field/props').SelectionFieldItem }): VNodeChild
  header?(): VNodeChild
  footer?(): VNodeChild
  empty?(): VNodeChild
  loader?(): VNodeChild
  'clear-icon'?(scope: { clear(event?: Event): void }): VNodeChild
  'arrow-icon'?(scope: { focus: boolean; menuOpen: boolean }): VNodeChild
  'loading-icon'?(): VNodeChild
  'search-icon'?(): VNodeChild
  'tree-slot-label'?(node: TreeNodeData, status: TreeSelectNodeStatus): VNodeChild
  'tree-slot-extra'?(node: TreeNodeData, status: TreeSelectNodeStatus): VNodeChild
  [name: `tree-slot-${string}`]: ((...args: any[]) => VNodeChild) | undefined
}
export interface TreeSelectExpose {
  refresh(): Promise<void>
  focus(): void
  blur(): void
}
