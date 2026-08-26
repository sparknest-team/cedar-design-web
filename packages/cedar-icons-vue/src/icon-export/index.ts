import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconExport from './icon-export.vue'

export const IconExport = Object.assign(_IconExport, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconExport' : _IconExport.name, _IconExport)
  },
})
