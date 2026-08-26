import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconAttachment from './icon-attachment.vue'

export const IconAttachment = Object.assign(_IconAttachment, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconAttachment' : _IconAttachment.name, _IconAttachment)
  },
})
