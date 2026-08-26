import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconClose from './icon-close.vue'

export const IconClose = Object.assign(_IconClose, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconClose' : _IconClose.name, _IconClose)
  },
})
