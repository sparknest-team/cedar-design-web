import type { ExtractPropTypes, PropType, VNode } from 'vue'
import { componentSizes } from '../_utils/constant'
import type { ComponentSize } from '../_utils/constant'

export type VerificationCodeSeparator = (index: number, character: string) => VNode
export type VerificationCodeFormatter = (inputValue: string, index: number, value: string) => string | boolean

export const verificationCodeProps = {
  modelValue: String,
  defaultValue: { type: String, default: '' },
  length: {
    type: Number,
    default: 6,
    validator: (value: unknown) => Number.isInteger(value) && Number(value) > 0,
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'md',
    validator: (value: unknown): value is ComponentSize => componentSizes.includes(value as ComponentSize),
  },
  disabled: Boolean,
  masked: Boolean,
  readonly: Boolean,
  error: { type: Boolean, default: false },
  separator: Function as PropType<VerificationCodeSeparator>,
  formatter: Function as PropType<VerificationCodeFormatter>,
  ariaLabel: String,
}

export type VerificationCodeProps = import("vue").ExtractPublicPropTypes<typeof verificationCodeProps>
