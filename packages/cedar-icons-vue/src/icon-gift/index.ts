import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconGift from './icon-gift.vue'

export const IconGift = Object.assign(_IconGift, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconGift' : _IconGift.name, _IconGift)
  },
})
