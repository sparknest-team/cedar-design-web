import type { ExtractPropTypes, InputHTMLAttributes, PropType } from 'vue'
import { componentSizes } from '../_utils/constant'
import type { ComponentSize } from '../_utils/constant'
import { formControlVariants } from '../_utils/form-control'
import type {
  FormControlMaxLength,
  FormControlVariant,
  WordLength,
  WordSlice,
} from '../_utils/form-control'

export interface TextareaAutoSize {
  minRows?: number
  maxRows?: number
}

export type TextareaMaxLength = FormControlMaxLength
export type { WordLength, WordSlice } from '../_utils/form-control'

export const textareaProps = {
  modelValue: String,
  modelModifiers: {
    type: Object as PropType<{ trim?: boolean }>,
    default: () => ({}),
  },
  defaultValue: { type: String, default: '' },
  placeholder: String,
  disabled: { type: Boolean, default: undefined },
  readonly: { type: Boolean, default: undefined },
  variant: {
    type: String as PropType<FormControlVariant>,
    default: 'outline',
    validator: (value: unknown): value is FormControlVariant =>
      formControlVariants.includes(value as FormControlVariant),
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: undefined,
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
  error: { type: Boolean, default: undefined },
  maxLength: {
    type: [Number, Object] as PropType<FormControlMaxLength>,
    default: 0,
  },
  showWordLimit: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  rows: [String, Number],
  resize: { type: Boolean, default: true },
  autoSize: {
    type: [Boolean, Object] as PropType<boolean | TextareaAutoSize>,
    default: false,
  },
  wordLength: Function as PropType<WordLength>,
  wordSlice: Function as PropType<WordSlice>,
  ariaLabel: String,
  autofocus: Boolean,
  enterkeyhint: String as PropType<InputHTMLAttributes['enterKeyHint']>,
  textareaAttrs: Object as PropType<Record<string, unknown>>,
}

export type TextareaProps = ExtractPropTypes<typeof textareaProps>
