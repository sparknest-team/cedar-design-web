import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLayers from './icon-layers.vue'

export const IconLayers = Object.assign(_IconLayers, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLayers' : _IconLayers.name, _IconLayers)
  },
})
