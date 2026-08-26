import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconExclamation from './icon-exclamation.vue'

export const IconExclamation = Object.assign(_IconExclamation, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconExclamation' : _IconExclamation.name, _IconExclamation)
  },
})
