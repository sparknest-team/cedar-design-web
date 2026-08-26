import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCaretRight from './icon-caret-right.vue'

export const IconCaretRight = Object.assign(_IconCaretRight, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCaretRight' : _IconCaretRight.name, _IconCaretRight)
  },
})
