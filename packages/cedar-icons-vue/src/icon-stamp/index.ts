import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconStamp from './icon-stamp.vue'

export const IconStamp = Object.assign(_IconStamp, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconStamp' : _IconStamp.name, _IconStamp)
  },
})
