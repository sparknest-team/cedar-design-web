import type { ExtractPropTypes, PropType } from 'vue'
import { componentSizes } from '../_utils/constant'
import type { ComponentSize } from '../_utils/constant'
import { formControlVariants } from '../_utils/form-control'
import type { FormControlMaxLength, FormControlVariant, WordLength, WordSlice } from '../_utils/form-control'

export type { WordLength, WordSlice } from '../_utils/form-control'

export const inputTypes = ['text', 'password', 'number', 'tel', 'email'] as const
export type InputType = (typeof inputTypes)[number]
export type InputMaxLength = FormControlMaxLength

export const inputProps = {
  variant: {
    type: String as PropType<FormControlVariant>,
    validator: (value: unknown): value is FormControlVariant =>
      formControlVariants.includes(value as FormControlVariant),
  },
  modelValue: String,
  defaultValue: { type: String, default: '' },
  size: {
    type: String as PropType<ComponentSize>,
    validator: (value: unknown): value is ComponentSize => componentSizes.includes(value as ComponentSize),
  },
  clearable: { type: Boolean, default: false },
  disabled: { type: Boolean, default: undefined },
  readonly: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  placeholder: String,
  maxLength: {
    type: [Number, Object] as PropType<FormControlMaxLength>,
    default: 0,
  },
  showWordLimit: { type: Boolean, default: false },
  wordLength: Function as PropType<WordLength>,
  wordSlice: Function as PropType<WordSlice>,
  inputAttrs: Object as PropType<Record<string, unknown>>,
  type: {
    type: String as PropType<InputType>,
    default: 'text',
    validator: (value: unknown): value is InputType => inputTypes.includes(value as InputType),
  },
}

export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputPasswordProps = {
  disabled: { type: Boolean, default: false },
  visibility: { type: Boolean, default: undefined },
  defaultVisibility: { type: Boolean, default: false },
  visibilityToggle: { type: Boolean, default: true },
}

export type InputPasswordProps = ExtractPropTypes<typeof inputPasswordProps>
