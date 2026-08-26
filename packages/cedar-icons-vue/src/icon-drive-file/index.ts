import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDriveFile from './icon-drive-file.vue'

export const IconDriveFile = Object.assign(_IconDriveFile, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDriveFile' : _IconDriveFile.name, _IconDriveFile)
  },
})
