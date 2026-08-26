import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconThumbUpFill from './icon-thumb-up-fill.vue'

export const IconThumbUpFill = Object.assign(_IconThumbUpFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconThumbUpFill' : _IconThumbUpFill.name, _IconThumbUpFill)
  },
})
