import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCaretLeft from './icon-caret-left.vue'

export const IconCaretLeft = Object.assign(_IconCaretLeft, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCaretLeft' : _IconCaretLeft.name, _IconCaretLeft)
  },
})
