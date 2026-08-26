import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMinusCircle from './icon-minus-circle.vue'

export const IconMinusCircle = Object.assign(_IconMinusCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMinusCircle' : _IconMinusCircle.name, _IconMinusCircle)
  },
})
