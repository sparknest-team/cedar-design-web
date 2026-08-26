import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMosaic from './icon-mosaic.vue'

export const IconMosaic = Object.assign(_IconMosaic, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMosaic' : _IconMosaic.name, _IconMosaic)
  },
})
