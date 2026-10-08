import { dateRuleProps, dateRangeValueProps } from '../date/core-props'
import { dateRangePickerProps } from '../date/picker/props'
const { mode: _mode, ...presentationProps } = dateRangePickerProps
export const props = { ...presentationProps, ...dateRuleProps, ...dateRangeValueProps }
export type DateRangePickerProps = import('vue').ExtractPublicPropTypes<typeof props>
