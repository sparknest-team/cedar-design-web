import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconTwitter from './icon-twitter.vue'

export const IconTwitter = Object.assign(_IconTwitter, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconTwitter' : _IconTwitter.name, _IconTwitter)
  },
})
