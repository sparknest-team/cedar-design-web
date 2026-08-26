import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconEraser from './icon-eraser.vue'

export const IconEraser = Object.assign(_IconEraser, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconEraser' : _IconEraser.name, _IconEraser)
  },
})
