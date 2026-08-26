import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCaretUp from './icon-caret-up.vue'

export const IconCaretUp = Object.assign(_IconCaretUp, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCaretUp' : _IconCaretUp.name, _IconCaretUp)
  },
})
