import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconItalic from './icon-italic.vue'

export const IconItalic = Object.assign(_IconItalic, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconItalic' : _IconItalic.name, _IconItalic)
  },
})
