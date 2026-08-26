import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFaceFrownFill from './icon-face-frown-fill.vue'

export const IconFaceFrownFill = Object.assign(_IconFaceFrownFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFaceFrownFill' : _IconFaceFrownFill.name, _IconFaceFrownFill)
  },
})
