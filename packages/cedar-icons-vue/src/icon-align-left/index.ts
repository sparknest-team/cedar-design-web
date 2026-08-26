import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconAlignLeft from './icon-align-left.vue'

export const IconAlignLeft = Object.assign(_IconAlignLeft, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconAlignLeft' : _IconAlignLeft.name, _IconAlignLeft)
  },
})
