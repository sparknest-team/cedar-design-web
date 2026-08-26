import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCloudDownload from './icon-cloud-download.vue'

export const IconCloudDownload = Object.assign(_IconCloudDownload, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCloudDownload' : _IconCloudDownload.name, _IconCloudDownload)
  },
})
