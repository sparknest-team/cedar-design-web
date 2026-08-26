import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCaretDown from './icon-caret-down.vue'

export const IconCaretDown = Object.assign(_IconCaretDown, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCaretDown' : _IconCaretDown.name, _IconCaretDown)
  },
})
