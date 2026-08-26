import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconWechat from './icon-wechat.vue'

export const IconWechat = Object.assign(_IconWechat, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconWechat' : _IconWechat.name, _IconWechat)
  },
})
