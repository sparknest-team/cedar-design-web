import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLocation from './icon-location.vue'

export const IconLocation = Object.assign(_IconLocation, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLocation' : _IconLocation.name, _IconLocation)
  },
})
