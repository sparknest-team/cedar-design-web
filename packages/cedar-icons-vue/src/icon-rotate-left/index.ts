import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconRotateLeft from './icon-rotate-left.vue'

export const IconRotateLeft = Object.assign(_IconRotateLeft, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconRotateLeft' : _IconRotateLeft.name, _IconRotateLeft)
  },
})
