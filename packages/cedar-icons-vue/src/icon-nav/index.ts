import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconNav from './icon-nav.vue'

export const IconNav = Object.assign(_IconNav, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconNav' : _IconNav.name, _IconNav)
  },
})
