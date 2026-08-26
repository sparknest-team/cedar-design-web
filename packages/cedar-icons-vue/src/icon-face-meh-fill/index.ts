import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFaceMehFill from './icon-face-meh-fill.vue'

export const IconFaceMehFill = Object.assign(_IconFaceMehFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFaceMehFill' : _IconFaceMehFill.name, _IconFaceMehFill)
  },
})
