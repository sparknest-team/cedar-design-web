import { withInstall } from '../_utils/global-config'
import _TimeRange from './time-range.vue'
import _TimeRangePicker from '../time/picker/time-range-picker.vue'
import { timeRangeProps } from './props'
import { timeRangePickerProps } from '../time/picker/props'

export type { TimeRangeProps } from './props'
export type { TimeRangePickerProps } from '../time/picker/props'

const TimeRangePicker = withInstall(_TimeRangePicker)

const TimeRange = withInstall(
  _TimeRange,
  Object.assign(_TimeRange, {
    Picker: TimeRangePicker,
  }),
  { components: [_TimeRange, TimeRangePicker] },
)

export type TimeRangeInstance = InstanceType<typeof _TimeRange>
export type TimeRangePickerInstance = InstanceType<typeof _TimeRangePicker>

export { TimeRange, TimeRangePicker, timeRangeProps, timeRangePickerProps }
export const _TimeRangeComponent = TimeRange
export const _TimeRangePickerComponent = TimeRangePicker

export default TimeRange
