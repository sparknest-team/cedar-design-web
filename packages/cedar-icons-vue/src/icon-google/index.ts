import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconGoogle from './icon-google.vue'

export const IconGoogle = Object.assign(_IconGoogle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconGoogle' : _IconGoogle.name, _IconGoogle)
  },
})
