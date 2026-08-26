import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDragArrow from './icon-drag-arrow.vue'

export const IconDragArrow = Object.assign(_IconDragArrow, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDragArrow' : _IconDragArrow.name, _IconDragArrow)
  },
})
