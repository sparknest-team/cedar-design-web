import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconUserGroup from './icon-user-group.vue'

export const IconUserGroup = Object.assign(_IconUserGroup, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconUserGroup' : _IconUserGroup.name, _IconUserGroup)
  },
})
