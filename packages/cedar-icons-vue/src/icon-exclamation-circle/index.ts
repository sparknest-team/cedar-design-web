import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconExclamationCircle from './icon-exclamation-circle.vue'

export const IconExclamationCircle = Object.assign(_IconExclamationCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconExclamationCircle' : _IconExclamationCircle.name, _IconExclamationCircle)
  },
})
