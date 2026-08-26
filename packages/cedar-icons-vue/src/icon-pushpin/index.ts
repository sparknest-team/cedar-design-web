import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPushpin from './icon-pushpin.vue'

export const IconPushpin = Object.assign(_IconPushpin, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPushpin' : _IconPushpin.name, _IconPushpin)
  },
})
