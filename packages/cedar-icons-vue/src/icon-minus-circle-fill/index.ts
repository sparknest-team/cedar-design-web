import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMinusCircleFill from './icon-minus-circle-fill.vue'

export const IconMinusCircleFill = Object.assign(_IconMinusCircleFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMinusCircleFill' : _IconMinusCircleFill.name, _IconMinusCircleFill)
  },
})
