import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconNotificationClose from './icon-notification-close.vue'

export const IconNotificationClose = Object.assign(_IconNotificationClose, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconNotificationClose' : _IconNotificationClose.name, _IconNotificationClose)
  },
})
