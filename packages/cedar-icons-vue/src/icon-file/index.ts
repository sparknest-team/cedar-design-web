import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFile from './icon-file.vue'

export const IconFile = Object.assign(_IconFile, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFile' : _IconFile.name, _IconFile)
  },
})
