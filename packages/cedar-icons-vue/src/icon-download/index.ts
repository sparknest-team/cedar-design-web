import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDownload from './icon-download.vue'

export const IconDownload = Object.assign(_IconDownload, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDownload' : _IconDownload.name, _IconDownload)
  },
})
