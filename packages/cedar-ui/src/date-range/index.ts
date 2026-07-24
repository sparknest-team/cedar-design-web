import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _DateRange from './date-range.vue'

const DateRange = Object.assign(_DateRange, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _DateRange.name, _DateRange)
  },
})

export type DateRangeInstance = InstanceType<typeof _DateRange>

export default DateRange
