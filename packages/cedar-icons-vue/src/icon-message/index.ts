import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMessage from './icon-message.vue'

export const IconMessage = Object.assign(_IconMessage, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMessage' : _IconMessage.name, _IconMessage)
  },
})
