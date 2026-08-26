import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFilePdf from './icon-file-pdf.vue'

export const IconFilePdf = Object.assign(_IconFilePdf, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFilePdf' : _IconFilePdf.name, _IconFilePdf)
  },
})
