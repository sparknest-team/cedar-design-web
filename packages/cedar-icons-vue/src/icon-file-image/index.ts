import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFileImage from './icon-file-image.vue'

export const IconFileImage = Object.assign(_IconFileImage, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFileImage' : _IconFileImage.name, _IconFileImage)
  },
})
