import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSun from './icon-sun.vue'

export const IconSun = Object.assign(_IconSun, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSun' : _IconSun.name, _IconSun)
  },
})
