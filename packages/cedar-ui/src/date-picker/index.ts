import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _DatePicker from './pickers/date-picker'
import _DateRangePicker from './date-range-picker.vue'

export type { ShortcutType } from './types'

const DatePicker = Object.assign(_DatePicker, {
  DateRangePicker: _DateRangePicker,
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _DatePicker.name, _DatePicker)
    app.component(componentPrefix + _DateRangePicker.name, _DateRangePicker)
  },
})

export type DatePickerInstance = InstanceType<typeof _DatePicker>
export type DateRangePickerInstance = InstanceType<typeof _DateRangePicker>

export { _DateRangePicker as DateRangePicker }

export default DatePicker
