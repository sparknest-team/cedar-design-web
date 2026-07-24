import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Scrollbar from './scrollbar.vue'

const Scrollbar = Object.assign(_Scrollbar, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Scrollbar.name, _Scrollbar)
  },
})

export type ScrollbarInstance = InstanceType<typeof _Scrollbar>
export type { ScrollbarProps } from './types'

export default Scrollbar
