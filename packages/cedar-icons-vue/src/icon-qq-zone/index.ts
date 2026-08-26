import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconQqZone from './icon-qq-zone.vue'

export const IconQqZone = Object.assign(_IconQqZone, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconQqZone' : _IconQqZone.name, _IconQqZone)
  },
})
