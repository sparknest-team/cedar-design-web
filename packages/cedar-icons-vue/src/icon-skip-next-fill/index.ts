import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSkipNextFill from './icon-skip-next-fill.vue'

export const IconSkipNextFill = Object.assign(_IconSkipNextFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSkipNextFill' : _IconSkipNextFill.name, _IconSkipNextFill)
  },
})
