import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMoreVertical from './icon-more-vertical.vue'

export const IconMoreVertical = Object.assign(_IconMoreVertical, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMoreVertical' : _IconMoreVertical.name, _IconMoreVertical)
  },
})
