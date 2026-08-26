import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFaceBookCircleFill from './icon-face-book-circle-fill.vue'

export const IconFaceBookCircleFill = Object.assign(_IconFaceBookCircleFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFaceBookCircleFill' : _IconFaceBookCircleFill.name, _IconFaceBookCircleFill)
  },
})
