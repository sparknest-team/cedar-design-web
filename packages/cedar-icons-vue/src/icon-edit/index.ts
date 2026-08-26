import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconEdit from './icon-edit.vue'

export const IconEdit = Object.assign(_IconEdit, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconEdit' : _IconEdit.name, _IconEdit)
  },
})
