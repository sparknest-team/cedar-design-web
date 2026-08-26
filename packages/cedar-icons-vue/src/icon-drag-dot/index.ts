import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDragDot from './icon-drag-dot.vue'

export const IconDragDot = Object.assign(_IconDragDot, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDragDot' : _IconDragDot.name, _IconDragDot)
  },
})
