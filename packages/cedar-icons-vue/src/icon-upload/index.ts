import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconUpload from './icon-upload.vue'

export const IconUpload = Object.assign(_IconUpload, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconUpload' : _IconUpload.name, _IconUpload)
  },
})
