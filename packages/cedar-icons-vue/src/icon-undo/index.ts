import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconUndo from './icon-undo.vue'

export const IconUndo = Object.assign(_IconUndo, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconUndo' : _IconUndo.name, _IconUndo)
  },
})
