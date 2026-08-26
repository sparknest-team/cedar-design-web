import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconH2 from './icon-h2.vue'

export const IconH2 = Object.assign(_IconH2, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconH2' : _IconH2.name, _IconH2)
  },
})
