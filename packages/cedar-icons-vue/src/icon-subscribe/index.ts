import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSubscribe from './icon-subscribe.vue'

export const IconSubscribe = Object.assign(_IconSubscribe, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSubscribe' : _IconSubscribe.name, _IconSubscribe)
  },
})
