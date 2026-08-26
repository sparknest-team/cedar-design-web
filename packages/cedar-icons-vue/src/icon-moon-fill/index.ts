import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMoonFill from './icon-moon-fill.vue'

export const IconMoonFill = Object.assign(_IconMoonFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMoonFill' : _IconMoonFill.name, _IconMoonFill)
  },
})
