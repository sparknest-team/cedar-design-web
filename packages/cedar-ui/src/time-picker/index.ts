import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _TimePicker from './time-picker.vue'
import _TimeRangePicker from './time-range-picker.vue'

const TimePicker = Object.assign(_TimePicker, {
  TimeRangePicker: _TimeRangePicker,
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _TimePicker.name, _TimePicker)
    app.component(componentPrefix + _TimeRangePicker.name, _TimeRangePicker)
  },
})

export type TimePickerInstance = InstanceType<typeof _TimePicker>
export type TimeRangePickerInstance = InstanceType<typeof _TimeRangePicker>

export { _TimeRangePicker as TimeRangePicker }

export default TimePicker
