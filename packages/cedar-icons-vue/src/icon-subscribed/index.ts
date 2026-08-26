import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSubscribed from './icon-subscribed.vue'

export const IconSubscribed = Object.assign(_IconSubscribed, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSubscribed' : _IconSubscribed.name, _IconSubscribed)
  },
})
