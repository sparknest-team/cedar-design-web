import { withInstall } from '../_utils/global-config'
import _Time from './Time.vue'
import _TimePicker from './picker/TimePicker.vue'
import { timeProps } from './props'
import { timePickerProps } from './picker/props'

export type { TimeProps } from './props'
export type { TimePickerProps } from './picker/props'

const TimePicker = withInstall(_TimePicker)

const Time = withInstall(
  _Time,
  Object.assign(_Time, {
    Picker: TimePicker,
  }),
  { components: [_Time, TimePicker] },
)

export type TimeInstance = InstanceType<typeof _Time>
export type TimePickerInstance = InstanceType<typeof _TimePicker>

export { Time, TimePicker, timeProps, timePickerProps }
export const _TimeComponent = Time
export const _TimePickerComponent = TimePicker

export default Time
