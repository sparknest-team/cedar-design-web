import type { ExtractPropTypes, PropType } from 'vue'
import { componentSizes } from '../_utils/constant'
import type { ComponentSize } from '../_utils/constant'

export const switchVariants = ['circle', 'round', 'line'] as const
export type SwitchVariant = (typeof switchVariants)[number]
export type SwitchValue = string | number | boolean
export type SwitchBeforeChange = (
  newValue: SwitchValue,
) => Promise<boolean | void> | boolean | void

export const switchProps = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<SwitchValue>,
    default: undefined,
  },
  defaultChecked: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  variant: {
    type: String as PropType<SwitchVariant>,
    default: 'circle',
    validator: (value: unknown): value is SwitchVariant =>
      switchVariants.includes(value as SwitchVariant),
  },
  size: {
    type: String as PropType<ComponentSize>,
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
  checkedValue: {
    type: [String, Number, Boolean] as PropType<SwitchValue>,
    default: true,
  },
  uncheckedValue: {
    type: [String, Number, Boolean] as PropType<SwitchValue>,
    default: false,
  },
  checkedColor: String,
  uncheckedColor: String,
  beforeChange: Function as PropType<SwitchBeforeChange>,
  checkedText: String,
  uncheckedText: String,
} 

export type SwitchProps = ExtractPropTypes<typeof switchProps>
