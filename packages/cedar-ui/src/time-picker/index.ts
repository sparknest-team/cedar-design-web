import { withInstall } from '../_utils/global-config'
import _TimePicker from './time-picker.vue'
import _TimeRangePicker from './time-range-picker.vue'
import { timePickerProps, timeRangePickerProps } from './props'

const TimePicker = withInstall(_TimePicker, Object.assign(_TimePicker, {
  TimeRangePicker: _TimeRangePicker,
}), { components: [_TimePicker, _TimeRangePicker] })

export type TimePickerInstance = InstanceType<typeof _TimePicker>
export type TimeRangePickerInstance = InstanceType<typeof _TimeRangePicker>
export type { TimePickerProps, TimeRangePickerProps } from './props'
export { TimePicker, timePickerProps, timeRangePickerProps }
export const _TimePickerComponent = TimePicker

export { _TimeRangePicker as TimeRangePicker }

export default TimePicker
