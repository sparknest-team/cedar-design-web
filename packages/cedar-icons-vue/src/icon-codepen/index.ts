import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCodepen from './icon-codepen.vue'

export const IconCodepen = Object.assign(_IconCodepen, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCodepen' : _IconCodepen.name, _IconCodepen)
  },
})
