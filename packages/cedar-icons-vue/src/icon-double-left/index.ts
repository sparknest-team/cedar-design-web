import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDoubleLeft from './icon-double-left.vue'

export const IconDoubleLeft = Object.assign(_IconDoubleLeft, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDoubleLeft' : _IconDoubleLeft.name, _IconDoubleLeft)
  },
})
