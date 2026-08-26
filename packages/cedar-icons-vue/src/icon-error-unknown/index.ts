import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconErrorUnknown from './icon-error-unknown.vue'

export const IconErrorUnknown = Object.assign(_IconErrorUnknown, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconErrorUnknown' : _IconErrorUnknown.name, _IconErrorUnknown)
  },
})
