import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Time from './time.vue'

const Time = Object.assign(_Time, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _Time.name, _Time)
  },
})

export type TimeInstance = InstanceType<typeof _Time>

export default Time
