import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Popover from './popover.vue'

const Popover = Object.assign(_Popover, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Popover.name, _Popover)
  },
})

export type PopoverInstance = InstanceType<typeof _Popover>
export type { PopoverPlacement, PopoverProps, PopoverTrigger } from './types'
export { Popover }

export default Popover
