import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconThumbUp from './icon-thumb-up.vue'

export const IconThumbUp = Object.assign(_IconThumbUp, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconThumbUp' : _IconThumbUp.name, _IconThumbUp)
  },
})
