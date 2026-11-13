import type { PropType } from 'vue'
import { dateRangeValueProps, dateRuleProps } from '../date/core-props'
import { dateRangeInteractionProps } from '../date/date-current'
import { datePanelProps } from '../date/panel-props'

export const props = {
  ...datePanelProps,
  ...dateRangeInteractionProps,
  ...dateRangeValueProps,
  disabled: { type: [Boolean, Array] as PropType<boolean | boolean[]>, default: false },
}
export type DateRangePickerProps = import('../_utils/public-props').CompatiblePublicProps<typeof props>
export type DateRangePickerType = NonNullable<DateRangePickerProps['type']>
export type DateRangePickerOptions = Omit<DateRangePickerProps, keyof typeof dateRuleProps | 'modelValue' | 'defaultValue' | 'disabled' | 'readonly'>
