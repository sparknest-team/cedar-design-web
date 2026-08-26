import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconGoogleCircleFill from './icon-google-circle-fill.vue'

export const IconGoogleCircleFill = Object.assign(_IconGoogleCircleFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconGoogleCircleFill' : _IconGoogleCircleFill.name, _IconGoogleCircleFill)
  },
})
