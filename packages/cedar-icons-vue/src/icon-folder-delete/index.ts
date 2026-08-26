import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFolderDelete from './icon-folder-delete.vue'

export const IconFolderDelete = Object.assign(_IconFolderDelete, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFolderDelete' : _IconFolderDelete.name, _IconFolderDelete)
  },
})
