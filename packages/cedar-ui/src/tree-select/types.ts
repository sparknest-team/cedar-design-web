import { CSSProperties } from 'vue'
import { TreeFieldNames, TreeNodeData, TreeProps, TreeNodeValue, LoadMore, CheckedStrategy } from '../tree/types'
import { TriggerProps } from '../trigger'
import { ComponentSize } from '../_utils/constant'

export interface LabelValue {
  value: TreeNodeValue
  label: string | number
}

export type TreeSelectValue = TreeNodeValue | TreeNodeValue[] | LabelValue | LabelValue[]

export type FilterTreeNode = (searchKey: string, nodeData: TreeNodeData) => boolean

export type FallbackOption = boolean | ((value: TreeNodeValue) => TreeNodeData | boolean)

export type ChangeHandler = (selectedValue: TreeSelectValue | undefined) => void

export type OpenChangeHandler = (open: boolean) => void

export type SearchHandler = (searchKey: string) => void

export type ClearHandler = () => void

export interface TreeSelectProps {
  disabled: boolean
  loading: boolean
  error: boolean
  size: ComponentSize
  border: boolean
  allowSearch: boolean
  clearable: boolean
  placeholder: string | undefined
  retainInputValue: boolean
  maxTagCount: number | undefined
  defaultValue: TreeSelectValue | undefined
  modelValue: TreeSelectValue | undefined
  multiple: boolean
  fieldNames: TreeFieldNames | undefined
  data: TreeNodeData[]
  labelInValue: boolean
  treeCheckable: boolean
  treeCheckStrictly: boolean
  treeCheckedStrategy: CheckedStrategy
  treeProps: Partial<TreeProps> | undefined
  triggerProps: Partial<TriggerProps> | undefined
  open: boolean | undefined
  defaultOpen: boolean
  dropdownStyle: CSSProperties | undefined
  dropdownClassName: string | string[] | undefined
  filterTreeNode: FilterTreeNode | undefined
  loadMore: LoadMore | undefined
  disableFilter: boolean
  popupContainer?: string | HTMLElement
  fallbackOption: FallbackOption
  showHeaderOnEmpty?: boolean
  showFooterOnEmpty?: boolean
}
