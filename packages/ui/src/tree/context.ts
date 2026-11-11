import { InjectionKey, Slot } from 'vue'
import type { Node, DropPosition, TreeNodeValue, TreeProps, Key2TreeNode, FilterTreeNode } from './types'

export const TreeInjectionKey: InjectionKey<TreeContext> = Symbol('TreeInjectionKey')

export type TreeContext = Readonly<{
  externallyManaged?: boolean
  focusedValue?: TreeNodeValue
  nodeId?: (key: TreeNodeValue) => string
  focusNode?: (key: TreeNodeValue) => void
  isVirtualNodeMounted?: (key: TreeNodeValue) => boolean
  treeProps: TreeProps
  switcherIcon?: Slot
  loadingIcon?: Slot
  nodeIcon?: Slot
  dragIcon?: Slot
  nodeTitle?: Slot
  nodeExtra?: Slot
  treeData: Node[]
  flattenTreeData: Node[]
  key2TreeNode: Key2TreeNode
  checkedValues: TreeNodeValue[]
  filterTreeNode?: FilterTreeNode
  indeterminateKeys: TreeNodeValue[]
  selectedValues: TreeNodeValue[]
  expandedValues: TreeNodeValue[]
  loadingKeys: TreeNodeValue[]
  currentExpandKeys: TreeNodeValue[]
  onLoadMore?: (key: TreeNodeValue) => void
  onCheck: (checked: boolean, key: TreeNodeValue, e?: Event) => void
  onSelect: (key: TreeNodeValue, e: Event) => void
  onExpand: (expanded: boolean, key: TreeNodeValue, e?: Event) => void
  onExpandEnd: (key: TreeNodeValue) => void
  onDragStart?: (key: TreeNodeValue, e: DragEvent) => void
  onDragEnd?: (key: TreeNodeValue, e: DragEvent) => void
  onDragOver?: (key: TreeNodeValue, e: DragEvent) => void
  onDragLeave?: (key: TreeNodeValue, e: DragEvent) => void
  onDrop?: (key: TreeNodeValue, dropPosition: DropPosition, e: DragEvent) => void
  allowDrop?: (key: TreeNodeValue, dropPosition: DropPosition) => boolean
}>

/** Embedded owners (for example a combobox) keep DOM focus and supply their own treeitem semantics. */
export const TreeKeyboardOwnerKey: InjectionKey<boolean> = Symbol('TreeKeyboardOwner')
