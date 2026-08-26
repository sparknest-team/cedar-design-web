import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMinus from './icon-minus.vue'

export const IconMinus = Object.assign(_IconMinus, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMinus' : _IconMinus.name, _IconMinus)
  },
})
