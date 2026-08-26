import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDelete from './icon-delete.vue'

export const IconDelete = Object.assign(_IconDelete, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDelete' : _IconDelete.name, _IconDelete)
  },
})
