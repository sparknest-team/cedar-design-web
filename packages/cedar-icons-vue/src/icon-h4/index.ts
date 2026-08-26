import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconH4 from './icon-h4.vue'

export const IconH4 = Object.assign(_IconH4, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconH4' : _IconH4.name, _IconH4)
  },
})
