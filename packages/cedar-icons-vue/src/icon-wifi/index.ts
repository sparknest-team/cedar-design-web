import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconWifi from './icon-wifi.vue'

export const IconWifi = Object.assign(_IconWifi, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconWifi' : _IconWifi.name, _IconWifi)
  },
})
