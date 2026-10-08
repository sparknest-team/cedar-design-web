import type { ExtractPropTypes, PropType, StyleValue } from 'vue'
import type { ButtonProps } from '../button'
import { componentSizes } from '../_utils/constant'
import type { ComponentSize } from '../_utils/constant'
import { formControlVariants } from '../_utils/form-control'
import type { FormControlVariant } from '../_utils/form-control'

export interface SearchField {
  value: string
  label: string
  placeholder?: string
}

export const searchProps = {
  modelValue: String,
  defaultValue: { type: String, default: '' },
  modelField: String,
  defaultField: String,
  model: Object as PropType<Record<string, unknown>>,
  fields: {
    type: Array as PropType<SearchField[]>,
    default: () => [],
  },
  selectStyle: {
    type: [String, Object, Array] as PropType<StyleValue>,
  },
  recentSearches: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  maxSearchHistoryCount: {
    type: Number,
    default: 5,
  },
  searchButton: { type: Boolean, default: false },
  buttonText: String,
  buttonProps: Object as PropType<ButtonProps>,
  loading: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  disabled: { type: Boolean, default: undefined },
  readonly: { type: Boolean, default: false },
  variant: {
    type: String as PropType<FormControlVariant>,
    default: 'outline',
    validator: (value: unknown): value is FormControlVariant =>
      formControlVariants.includes(value as FormControlVariant),
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'md',
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
  placeholder: String,
}

export type SearchProps = ExtractPropTypes<typeof searchProps>
