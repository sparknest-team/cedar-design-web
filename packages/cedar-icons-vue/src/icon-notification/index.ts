import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconNotification from './icon-notification.vue'

export const IconNotification = Object.assign(_IconNotification, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconNotification' : _IconNotification.name, _IconNotification)
  },
})
