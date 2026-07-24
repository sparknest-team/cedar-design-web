import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Date from './date.vue'

const Date = Object.assign(_Date, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _Date.name, _Date)
  },
})

export type DateInstance = InstanceType<typeof _Date>

export default Date
