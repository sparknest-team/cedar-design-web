import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconHeartFill from './icon-heart-fill.vue'

export const IconHeartFill = Object.assign(_IconHeartFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconHeartFill' : _IconHeartFill.name, _IconHeartFill)
  },
})
