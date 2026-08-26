import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMenuFold from './icon-menu-fold.vue'

export const IconMenuFold = Object.assign(_IconMenuFold, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMenuFold' : _IconMenuFold.name, _IconMenuFold)
  },
})
