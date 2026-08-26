import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFacebookSquareFill from './icon-facebook-square-fill.vue'

export const IconFacebookSquareFill = Object.assign(_IconFacebookSquareFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFacebookSquareFill' : _IconFacebookSquareFill.name, _IconFacebookSquareFill)
  },
})
