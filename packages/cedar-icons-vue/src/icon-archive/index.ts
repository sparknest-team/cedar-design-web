import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconArchive from './icon-archive.vue'

export const IconArchive = Object.assign(_IconArchive, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconArchive' : _IconArchive.name, _IconArchive)
  },
})
