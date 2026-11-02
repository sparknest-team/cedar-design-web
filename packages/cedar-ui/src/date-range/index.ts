import { withInstall } from '../_utils/global-config'
import _DateRangePicker from './DateRangePicker.vue'
import { props as dateRangePickerProps } from './picker-props'
import _DateRange from './presentation'
import { dateRangeProps } from './props'

export type { DateRangeProps } from './props'
export type { DateRangePickerProps } from './picker-props'

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

export type { DateValue, DateSelection, DateSide, DateValueOptions } from '../date/date-value'
export type { DateDisabledTime, DateRules } from '../date/date-rules'

export type { DateRangeType } from './props'
export type { DateRangePickerType, DateRangePickerOptions } from './picker-props'
export type { DateRangeEmits, DateRangePickerEmits } from '../date/events'

export type { DateTimePickerOptions } from '../date/time-picker-options'

export type { DateRangePopupOptions } from './popup-options'
