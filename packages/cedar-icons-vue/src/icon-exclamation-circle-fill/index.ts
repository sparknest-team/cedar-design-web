import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconExclamationCircleFill from './icon-exclamation-circle-fill.vue'

export const IconExclamationCircleFill = Object.assign(_IconExclamationCircleFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconExclamationCircleFill' : _IconExclamationCircleFill.name, _IconExclamationCircleFill)
  },
})
