import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconH3 from './icon-h3.vue'

export const IconH3 = Object.assign(_IconH3, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconH3' : _IconH3.name, _IconH3)
  },
})
