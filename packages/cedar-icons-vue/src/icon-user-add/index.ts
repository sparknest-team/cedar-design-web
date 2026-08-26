import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconUserAdd from './icon-user-add.vue'

export const IconUserAdd = Object.assign(_IconUserAdd, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconUserAdd' : _IconUserAdd.name, _IconUserAdd)
  },
})
