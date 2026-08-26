import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCloseCircleFill from './icon-close-circle-fill.vue'

export const IconCloseCircleFill = Object.assign(_IconCloseCircleFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCloseCircleFill' : _IconCloseCircleFill.name, _IconCloseCircleFill)
  },
})
