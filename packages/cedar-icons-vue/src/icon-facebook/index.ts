import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFacebook from './icon-facebook.vue'

export const IconFacebook = Object.assign(_IconFacebook, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFacebook' : _IconFacebook.name, _IconFacebook)
  },
})
