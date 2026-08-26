import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPoweroff from './icon-poweroff.vue'

export const IconPoweroff = Object.assign(_IconPoweroff, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPoweroff' : _IconPoweroff.name, _IconPoweroff)
  },
})
