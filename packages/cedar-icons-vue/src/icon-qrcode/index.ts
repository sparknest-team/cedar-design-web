import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconQrcode from './icon-qrcode.vue'

export const IconQrcode = Object.assign(_IconQrcode, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconQrcode' : _IconQrcode.name, _IconQrcode)
  },
})
