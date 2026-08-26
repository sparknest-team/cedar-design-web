import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSkipNext from './icon-skip-next.vue'

export const IconSkipNext = Object.assign(_IconSkipNext, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSkipNext' : _IconSkipNext.name, _IconSkipNext)
  },
})
