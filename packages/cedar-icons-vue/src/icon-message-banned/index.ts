import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMessageBanned from './icon-message-banned.vue'

export const IconMessageBanned = Object.assign(_IconMessageBanned, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMessageBanned' : _IconMessageBanned.name, _IconMessageBanned)
  },
})
