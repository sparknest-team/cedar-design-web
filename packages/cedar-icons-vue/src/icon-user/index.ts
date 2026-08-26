import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconUser from './icon-user.vue'

export const IconUser = Object.assign(_IconUser, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconUser' : _IconUser.name, _IconUser)
  },
})
