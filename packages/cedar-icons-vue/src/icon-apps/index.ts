import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconApps from './icon-apps.vue'

export const IconApps = Object.assign(_IconApps, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconApps' : _IconApps.name, _IconApps)
  },
})
