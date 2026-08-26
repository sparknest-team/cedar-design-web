import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconQqCircleFill from './icon-qq-circle-fill.vue'

export const IconQqCircleFill = Object.assign(_IconQqCircleFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconQqCircleFill' : _IconQqCircleFill.name, _IconQqCircleFill)
  },
})
