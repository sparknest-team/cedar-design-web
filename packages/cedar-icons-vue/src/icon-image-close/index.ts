import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconImageClose from './icon-image-close.vue'

export const IconImageClose = Object.assign(_IconImageClose, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconImageClose' : _IconImageClose.name, _IconImageClose)
  },
})
