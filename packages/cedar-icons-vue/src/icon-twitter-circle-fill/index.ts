import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconTwitterCircleFill from './icon-twitter-circle-fill.vue'

export const IconTwitterCircleFill = Object.assign(_IconTwitterCircleFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconTwitterCircleFill' : _IconTwitterCircleFill.name, _IconTwitterCircleFill)
  },
})
