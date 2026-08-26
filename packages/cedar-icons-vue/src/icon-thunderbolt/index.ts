import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconThunderbolt from './icon-thunderbolt.vue'

export const IconThunderbolt = Object.assign(_IconThunderbolt, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconThunderbolt' : _IconThunderbolt.name, _IconThunderbolt)
  },
})
