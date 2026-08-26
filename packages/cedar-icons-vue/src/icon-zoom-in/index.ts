import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconZoomIn from './icon-zoom-in.vue'

export const IconZoomIn = Object.assign(_IconZoomIn, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconZoomIn' : _IconZoomIn.name, _IconZoomIn)
  },
})
