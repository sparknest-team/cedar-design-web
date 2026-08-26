import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMoon from './icon-moon.vue'

export const IconMoon = Object.assign(_IconMoon, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMoon' : _IconMoon.name, _IconMoon)
  },
})
