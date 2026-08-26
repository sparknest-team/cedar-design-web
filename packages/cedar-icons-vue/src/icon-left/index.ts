import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLeft from './icon-left.vue'

export const IconLeft = Object.assign(_IconLeft, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLeft' : _IconLeft.name, _IconLeft)
  },
})
