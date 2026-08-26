import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCheckSquare from './icon-check-square.vue'

export const IconCheckSquare = Object.assign(_IconCheckSquare, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCheckSquare' : _IconCheckSquare.name, _IconCheckSquare)
  },
})
