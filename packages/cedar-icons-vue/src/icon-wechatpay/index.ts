import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconWechatpay from './icon-wechatpay.vue'

export const IconWechatpay = Object.assign(_IconWechatpay, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconWechatpay' : _IconWechatpay.name, _IconWechatpay)
  },
})
