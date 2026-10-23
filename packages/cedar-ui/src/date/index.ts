import { withInstall } from '../_utils/global-config'
import _DatePicker from './DatePicker.vue'
import { props as datePickerProps } from './picker-props'
import _Date from './presentation'
import { dateProps } from './props'

export type { ShortcutType } from './picker/types'
export type { DatePickerProps } from './picker-props'
export type { DateProps } from './props'

const DatePicker = withInstall(_DatePicker)

const Date = withInstall(
  _Date,
  Object.assign(_Date, {
    Picker: DatePicker,
  }),
  { components: [_Date, DatePicker] },
)

export type DateInstance = InstanceType<typeof _Date>
export type DatePickerInstance = InstanceType<typeof _DatePicker>

export { Date, DatePicker, dateProps, datePickerProps }
export const _DateComponent = Date
export const _DatePickerComponent = DatePicker

export default Date

export type { DateValue, DateSelection, DateSide, DateValueOptions } from '../date/date-value'
export type { DateDisabledTime, DateRules } from '../date/date-rules'

export type { DateType } from './props'
export type { DatePickerType, DatePickerOptions } from './picker-props'
export type { DateWeekStart } from './panel-props'
export type { DateEventPayload, DateChangeArgs, DateEmits, DatePickerEmits } from './events'

export type { DateShortcut, DateShortcutsPosition } from './panel-tools-props'

export type { DateTimePickerOptions } from './time-picker-options'
