import { withInstall } from '../_utils/global-config'
import { timePickerProps } from './picker/props'
import _TimePicker from './picker/TimePicker.vue'
import _Time from './presentation'
import { timeProps } from './props'

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

export type { TimeDisabledRules, TimeStep } from './time-rules'
export type { TimeValue } from './time-value'
export type {
  TimePanelPresentationProps,
  TimePopupPresentationProps,
  TimeWheelPresentationProps,
} from './presentation-props'
