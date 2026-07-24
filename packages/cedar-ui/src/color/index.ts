import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Color from './color.vue'

const Color = Object.assign(_Color, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _Color.name, _Color)
  },
})

export type ColorInstance = InstanceType<typeof _Color>

export default Color
