import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconToTop from './icon-to-top.vue'

export const IconToTop = Object.assign(_IconToTop, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconToTop' : _IconToTop.name, _IconToTop)
  },
})
