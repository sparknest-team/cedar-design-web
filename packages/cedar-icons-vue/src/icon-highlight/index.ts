import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconHighlight from './icon-highlight.vue'

export const IconHighlight = Object.assign(_IconHighlight, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconHighlight' : _IconHighlight.name, _IconHighlight)
  },
})
