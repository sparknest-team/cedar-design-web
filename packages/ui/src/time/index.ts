import { withInstall } from '../_utils/global-config'
import { timePickerProps } from './picker/props'
import _TimePicker from './picker/TimePicker.vue'
import _Time from './presentation'
import { timeProps } from './props'

export type { TimeProps } from './props'
export type { TimePickerProps } from './picker/props'

const TimePicker: import('../_utils/global-config').ComponentWithInstall<typeof _TimePicker> = withInstall(_TimePicker)

const Time: import('../_utils/global-config').ComponentWithInstall<typeof _Time & { Picker: typeof TimePicker }> = withInstall(
  _Time,
  Object.assign(_Time, {
    Picker: TimePicker,
  }),
  { components: [_Time, TimePicker] },
)

export type TimeInstance = InstanceType<typeof _Time> & import('./public-types').TimeExpose
export type TimePickerInstance = InstanceType<typeof _TimePicker>

export { Time, TimePicker, timeProps, timePickerProps }
export const _TimeComponent: typeof Time = Time
export const _TimePickerComponent: typeof TimePicker = TimePicker

export default Time

export type { TimeDisabledRules, TimeStep } from './time-rules'
export type { TimeValue } from './time-value'
export type {
  TimePanelPresentationProps,
  TimePopupPresentationProps,
  TimeWheelPresentationProps,
} from './presentation-props'

export type { TimeModelValue, TimeEmits, TimeReadScope, TimeSuffixIconScope, TimeActionsScope, TimeExpose } from './public-types'
export type { TimeSlots } from './slots'

export type { TimePickerEmits, TimePickerSlots } from './picker-contract'
