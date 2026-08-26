import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconHome from './icon-home.vue'

export const IconHome = Object.assign(_IconHome, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconHome' : _IconHome.name, _IconHome)
  },
})
