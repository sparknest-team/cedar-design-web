import type { PropType } from 'vue'
import type { DateTimePickerOptions } from './time-picker-options'
import type { DatePickerOptions } from './picker-props'
import { fieldDecoratorProps } from '../field-decorator/props'
import { popupContainerProp, type PopupContainer } from '../_utils/popup-container'
import { dateRuleProps, dateSingleValueProps } from '../date/core-props'

export const dateProps = {
  ...dateRuleProps,
  ...dateSingleValueProps,

  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  disableConfirm: Boolean,
  popupContainer: popupContainerProp,
  popupProps: { type: Object as PropType<Record<string, unknown> & { popupContainer?: PopupContainer }>, default: () => ({}) },
  datePickerProps: { type: Object as PropType<DatePickerOptions>, default: () => ({}) },

  timePickerProps: { type: Object as PropType<DateTimePickerOptions>, default: () => ({}) },
  inputEditable: { type: Boolean, default: true },
  disabled: { type: Boolean, default: undefined },
  readonly: { type: Boolean, default: undefined },
  error: { type: Boolean, default: undefined },
  clearable: { type: Boolean, default: true },
  placeholder: String,
  separator: { type: String, default: ', ' },
  size: fieldDecoratorProps.size,
  variant: { ...fieldDecoratorProps.variant, default: 'filled' },
  hint: fieldDecoratorProps.hint,
  line: fieldDecoratorProps.line,
  textColor: fieldDecoratorProps.textColor,
  focusColor: fieldDecoratorProps.focusColor,
  blurColor: fieldDecoratorProps.blurColor,
}
export type DateProps = import('vue').ExtractPublicPropTypes<typeof dateProps>
export type DateType = NonNullable<DateProps['type']>
