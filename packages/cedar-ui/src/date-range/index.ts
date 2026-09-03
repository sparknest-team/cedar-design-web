import { withInstall } from '../_utils/global-config'
import _DateRange from './date-range.vue'
import _DateRangePicker from '../date/picker/date-range-picker.vue'
import { dateRangeProps } from './props'
import { dateRangePickerProps } from '../date/picker/props'

export type { DateRangeProps } from './props'
export type { DateRangePickerProps } from '../date/picker/props'

const DateRangePicker = withInstall(_DateRangePicker)

const DateRange = withInstall(
  _DateRange,
  Object.assign(_DateRange, {
    Picker: DateRangePicker,
  }),
  { components: [_DateRange, DateRangePicker] },
)

export type DateRangeInstance = InstanceType<typeof _DateRange>
export type DateRangePickerInstance = InstanceType<typeof _DateRangePicker>

export { DateRange, DateRangePicker, dateRangeProps, dateRangePickerProps }
export const _DateRangeComponent = DateRange
export const _DateRangePickerComponent = DateRangePicker

export default DateRange
