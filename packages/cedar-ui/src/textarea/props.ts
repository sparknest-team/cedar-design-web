import type { ExtractPropTypes, PropType } from 'vue'
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

export const textareaProps = {
  modelValue: String,
  defaultValue: { type: String, default: '' },
  placeholder: String,
  disabled: Boolean,
  readonly: { type: Boolean, default: false },
  variant: {
    type: String as PropType<FormControlVariant>,
    validator: (value: unknown): value is FormControlVariant =>
      formControlVariants.includes(value as FormControlVariant),
  },
  size: {
    type: String as PropType<ComponentSize>,
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
  error: { type: Boolean, default: false },
  maxLength: {
    type: [Number, Object] as PropType<FormControlMaxLength>,
    default: 0,
  },
  showWordLimit: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  autoSize: {
    type: [Boolean, Object] as PropType<boolean | TextareaAutoSize>,
    default: false,
  },
  wordLength: Function as PropType<WordLength>,
  wordSlice: Function as PropType<WordSlice>,
  textareaAttrs: Object as PropType<Record<string, unknown>>,
} 

export type TextareaProps = ExtractPropTypes<typeof textareaProps>
