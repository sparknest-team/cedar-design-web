import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconEmail from './icon-email.vue'

export const IconEmail = Object.assign(_IconEmail, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconEmail' : _IconEmail.name, _IconEmail)
  },
})
