import { dateRuleProps, dateSingleValueProps } from './core-props'
import { pickerProps } from './picker/props'
const { mode: _mode, ...presentationProps } = pickerProps
export const props = { ...presentationProps, ...dateRuleProps, ...dateSingleValueProps }
export type DatePickerProps = import('vue').ExtractPublicPropTypes<typeof props>
