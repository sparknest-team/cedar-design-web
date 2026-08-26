import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDragDotVertical from './icon-drag-dot-vertical.vue'

export const IconDragDotVertical = Object.assign(_IconDragDotVertical, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDragDotVertical' : _IconDragDotVertical.name, _IconDragDotVertical)
  },
})
