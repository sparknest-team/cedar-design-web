import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconAlipayCircle from './icon-alipay-circle.vue'

export const IconAlipayCircle = Object.assign(_IconAlipayCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconAlipayCircle' : _IconAlipayCircle.name, _IconAlipayCircle)
  },
})
