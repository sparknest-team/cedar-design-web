import type { App } from 'vue'
import type { ArcoOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Ellipsis from './src/ellipsis.vue'
import { ellipsisProps } from './src/props'

const Ellipsis = Object.assign(_Ellipsis, {
  install: (app: App, options?: ArcoOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Ellipsis.name, _Ellipsis)
  },
})

export type EllipsisInstance = InstanceType<typeof _Ellipsis>
export type { EllipsisProps, EllipsisExpandTrigger } from './src/props'

export { ellipsisProps }
export { Ellipsis }

export const _EllipsisComponent = Ellipsis

export default Ellipsis
