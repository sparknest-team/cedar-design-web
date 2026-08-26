import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconRight from './icon-right.vue'

export const IconRight = Object.assign(_IconRight, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconRight' : _IconRight.name, _IconRight)
  },
})
