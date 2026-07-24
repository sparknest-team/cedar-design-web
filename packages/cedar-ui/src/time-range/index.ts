import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _TimeRange from './time-range.vue'

const TimeRange = Object.assign(_TimeRange, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _TimeRange.name, _TimeRange)
  },
})

export type TimeRangeInstance = InstanceType<typeof _TimeRange>

export default TimeRange
