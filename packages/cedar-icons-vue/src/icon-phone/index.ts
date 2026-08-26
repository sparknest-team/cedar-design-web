import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPhone from './icon-phone.vue'

export const IconPhone = Object.assign(_IconPhone, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPhone' : _IconPhone.name, _IconPhone)
  },
})
