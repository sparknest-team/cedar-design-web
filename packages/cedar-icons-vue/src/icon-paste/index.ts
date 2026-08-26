import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPaste from './icon-paste.vue'

export const IconPaste = Object.assign(_IconPaste, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPaste' : _IconPaste.name, _IconPaste)
  },
})
