import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconStarFill from './icon-star-fill.vue'

export const IconStarFill = Object.assign(_IconStarFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconStarFill' : _IconStarFill.name, _IconStarFill)
  },
})
