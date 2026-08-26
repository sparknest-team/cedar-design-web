import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconH7 from './icon-h7.vue'

export const IconH7 = Object.assign(_IconH7, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconH7' : _IconH7.name, _IconH7)
  },
})
