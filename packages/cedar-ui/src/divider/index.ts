import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Divider from './divider.vue'
import { dividerProps } from './props'

const Divider = Object.assign(_Divider, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Divider.name, _Divider)
  },
})

export type DividerInstance = InstanceType<typeof _Divider>
export type { DividerProps } from './props'

export { dividerProps }
export { Divider }

export const _DividerComponent = Divider

export default Divider
