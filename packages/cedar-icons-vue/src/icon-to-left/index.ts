import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconToLeft from './icon-to-left.vue'

export const IconToLeft = Object.assign(_IconToLeft, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconToLeft' : _IconToLeft.name, _IconToLeft)
  },
})
