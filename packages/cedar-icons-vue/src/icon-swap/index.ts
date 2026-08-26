import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSwap from './icon-swap.vue'

export const IconSwap = Object.assign(_IconSwap, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSwap' : _IconSwap.name, _IconSwap)
  },
})
