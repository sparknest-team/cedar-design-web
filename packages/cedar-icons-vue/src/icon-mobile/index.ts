import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMobile from './icon-mobile.vue'

export const IconMobile = Object.assign(_IconMobile, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMobile' : _IconMobile.name, _IconMobile)
  },
})
