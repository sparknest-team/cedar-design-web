import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFolder from './icon-folder.vue'

export const IconFolder = Object.assign(_IconFolder, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFolder' : _IconFolder.name, _IconFolder)
  },
})
