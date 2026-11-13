import { dateSingleValueProps, dateRuleProps } from './core-props'
import { dateNowProps } from './date-current'
import { datePanelProps } from './panel-props'

export const props = { ...datePanelProps, ...dateNowProps, ...dateSingleValueProps }
export type DatePickerProps = import('../_utils/public-props').CompatiblePublicProps<typeof props>
export type DatePickerType = NonNullable<DatePickerProps['type']>
export type DatePickerOptions = Omit<DatePickerProps, keyof typeof dateRuleProps | 'modelValue' | 'defaultValue' | 'disabled' | 'readonly'>
