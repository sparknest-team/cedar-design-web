import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconH1 from './icon-h1.vue'

export const IconH1 = Object.assign(_IconH1, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconH1' : _IconH1.name, _IconH1)
  },
})
