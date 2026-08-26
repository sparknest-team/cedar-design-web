import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCheckCircleFill from './icon-check-circle-fill.vue'

export const IconCheckCircleFill = Object.assign(_IconCheckCircleFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCheckCircleFill' : _IconCheckCircleFill.name, _IconCheckCircleFill)
  },
})
