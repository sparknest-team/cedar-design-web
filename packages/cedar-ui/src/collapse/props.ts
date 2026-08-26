import type { ExtractPropTypes, PropType } from 'vue'

export type CollapseName = string | number
export const expandIconPositions = ['left', 'right'] as const
export type ExpandIconPosition = (typeof expandIconPositions)[number]

export const collapseProps = {
  activeNames: Array as PropType<CollapseName[]>,
  defaultActiveNames: {
    type: Array as PropType<CollapseName[]>,
    default: () => [],
  },
  accordion: Boolean,
  showExpandIcon: Boolean,
  expandIconPosition: {
    type: String as PropType<ExpandIconPosition>,
    default: 'left',
    validator: (value: ExpandIconPosition) => expandIconPositions.includes(value),
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  divider: {
    type: Boolean,
    default: true,
  },
  offset: Boolean,
  destroyOnHide: Boolean,
} 

export const collapseItemProps = {
  name: {
    type: [String, Number] as PropType<CollapseName>,
    required: true,
  },
  title: String,
  disabled: Boolean,
  showExpandIcon: {
    type: Boolean,
    default: true,
  },
  destroyOnHide: Boolean,
} 

export type CollapseProps = Partial<ExtractPropTypes<typeof collapseProps>>
export type CollapseItemProps = Partial<ExtractPropTypes<typeof collapseItemProps>> & { name: CollapseName }
