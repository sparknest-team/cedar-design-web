import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconReply from './icon-reply.vue'

export const IconReply = Object.assign(_IconReply, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconReply' : _IconReply.name, _IconReply)
  },
})
