import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconExclamationPolygonFill from './icon-exclamation-polygon-fill.vue'

export const IconExclamationPolygonFill = Object.assign(_IconExclamationPolygonFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconExclamationPolygonFill' : _IconExclamationPolygonFill.name, _IconExclamationPolygonFill)
  },
})
