import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSend from './icon-send.vue'

export const IconSend = Object.assign(_IconSend, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSend' : _IconSend.name, _IconSend)
  },
})
