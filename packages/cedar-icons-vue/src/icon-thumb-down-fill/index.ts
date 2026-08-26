import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconThumbDownFill from './icon-thumb-down-fill.vue'

export const IconThumbDownFill = Object.assign(_IconThumbDownFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconThumbDownFill' : _IconThumbDownFill.name, _IconThumbDownFill)
  },
})
