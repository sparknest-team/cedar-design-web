import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCodeSquare from './icon-code-square.vue'

export const IconCodeSquare = Object.assign(_IconCodeSquare, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCodeSquare' : _IconCodeSquare.name, _IconCodeSquare)
  },
})
