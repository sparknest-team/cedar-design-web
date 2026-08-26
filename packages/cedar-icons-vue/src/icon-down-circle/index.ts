import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDownCircle from './icon-down-circle.vue'

export const IconDownCircle = Object.assign(_IconDownCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDownCircle' : _IconDownCircle.name, _IconDownCircle)
  },
})
