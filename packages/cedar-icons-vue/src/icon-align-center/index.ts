import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconAlignCenter from './icon-align-center.vue'

export const IconAlignCenter = Object.assign(_IconAlignCenter, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconAlignCenter' : _IconAlignCenter.name, _IconAlignCenter)
  },
})
