import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconToBottom from './icon-to-bottom.vue'

export const IconToBottom = Object.assign(_IconToBottom, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconToBottom' : _IconToBottom.name, _IconToBottom)
  },
})
