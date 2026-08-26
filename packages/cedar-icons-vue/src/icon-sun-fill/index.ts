import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSunFill from './icon-sun-fill.vue'

export const IconSunFill = Object.assign(_IconSunFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSunFill' : _IconSunFill.name, _IconSunFill)
  },
})
