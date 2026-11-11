import type { RenderFunction, VNode, VNodeChild } from 'vue'

export interface DescData {
  /**
   * @zh 标签
   * @en Label
   */
  label: string | RenderFunction
  /**
   * @zh 数据
   * @en Data
   */
  value: string | RenderFunction
  /**
   * @zh 所占列数
   * @en number of columns
   * @default-value 1
   */
  span?: number
}

export type DescLayout = 'horizontal' | 'vertical' | 'inline-horizontal' | 'inline-vertical' | 'inline-auto'

export interface DescriptionsSlotScope {
  index: number
  data: DescData
}
export interface DescriptionsSlots {
  default?: () => VNodeChild
  title?: () => VNodeChild
  label?: (scope: DescriptionsSlotScope & { label: DescData['label'] }) => VNodeChild
  value?: (scope: DescriptionsSlotScope & { value: DescData['value'] }) => VNodeChild
}
export interface DescriptionsItemSlots {
  default?: () => VNodeChild
  label?: () => VNodeChild
}

export interface DescItemData {
  index: number
  span: number
}

export interface RenderData {
  data: DescData | VNode
  span: number
  index: number
}
