import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSkipPreviousFill from './icon-skip-previous-fill.vue'

export const IconSkipPreviousFill = Object.assign(_IconSkipPreviousFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSkipPreviousFill' : _IconSkipPreviousFill.name, _IconSkipPreviousFill)
  },
})
