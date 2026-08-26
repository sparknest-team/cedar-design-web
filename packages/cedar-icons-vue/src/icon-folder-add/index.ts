import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFolderAdd from './icon-folder-add.vue'

export const IconFolderAdd = Object.assign(_IconFolderAdd, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFolderAdd' : _IconFolderAdd.name, _IconFolderAdd)
  },
})
