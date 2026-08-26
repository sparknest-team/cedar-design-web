import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconAlignRight from './icon-align-right.vue'

export const IconAlignRight = Object.assign(_IconAlignRight, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconAlignRight' : _IconAlignRight.name, _IconAlignRight)
  },
})
