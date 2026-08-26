import { withInstall } from '../_utils/global-config'
import _DatePicker from './pickers/date-picker'
import _DateRangePicker from './date-range-picker.vue'
import { datePickerProps, dateRangePickerProps } from './props'

export type { ShortcutType } from './types'
export type { DatePickerProps, DateRangePickerProps } from './props'

const DatePicker = withInstall(_DatePicker, Object.assign(_DatePicker, {
  DateRangePicker: _DateRangePicker,
}), { components: [_DatePicker, _DateRangePicker] })

export type DatePickerInstance = InstanceType<typeof _DatePicker>
export type DateRangePickerInstance = InstanceType<typeof _DateRangePicker>

export { _DatePicker as DatePicker, _DateRangePicker as DateRangePicker, datePickerProps, dateRangePickerProps }
export const _DatePickerComponent = _DatePicker

export default DatePicker
