import { withInstall } from '../_utils/global-config'
import _Date from './Date.vue'
import _DatePicker from './picker/pickers/date-picker'
import { dateProps } from './props'
import { datePickerProps } from './picker/props'

export type { ShortcutType } from './picker/types'
export type { DatePickerProps } from './picker/props'
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
