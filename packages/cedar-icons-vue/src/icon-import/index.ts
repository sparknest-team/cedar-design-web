import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconImport from './icon-import.vue'

export const IconImport = Object.assign(_IconImport, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconImport' : _IconImport.name, _IconImport)
  },
})
