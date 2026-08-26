import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSkipPrevious from './icon-skip-previous.vue'

export const IconSkipPrevious = Object.assign(_IconSkipPrevious, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSkipPrevious' : _IconSkipPrevious.name, _IconSkipPrevious)
  },
})
