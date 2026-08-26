import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize, SemanticStatus } from '../_utils/constant'
import type { TagColor, TagVariant } from './types'

export const tagVariants = ['default', 'outline'] as const

export const tagProps = {
  color: String as PropType<TagColor | string>,
  size: String as PropType<ComponentSize>,
  status: String as PropType<SemanticStatus>,
  variant: {
    type: String as PropType<TagVariant>,
    default: 'default',
    validator: (value: unknown): value is TagVariant => tagVariants.includes(value as TagVariant),
  },
  show: { type: Boolean, default: undefined },
  defaultShow: { type: Boolean, default: true },
  loading: { type: Boolean, default: false },
  closable: { type: Boolean, default: false },
  checkable: { type: Boolean, default: false },
  checked: { type: Boolean, default: undefined },
  defaultChecked: { type: Boolean, default: true },
  nowrap: { type: Boolean, default: false },
} 

export type TagProps = ExtractPropTypes<typeof tagProps>
