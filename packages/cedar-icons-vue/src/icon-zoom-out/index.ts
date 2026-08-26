import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconZoomOut from './icon-zoom-out.vue'

export const IconZoomOut = Object.assign(_IconZoomOut, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconZoomOut' : _IconZoomOut.name, _IconZoomOut)
  },
})
