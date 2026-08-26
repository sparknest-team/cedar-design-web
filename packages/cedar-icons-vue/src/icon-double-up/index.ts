import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDoubleUp from './icon-double-up.vue'

export const IconDoubleUp = Object.assign(_IconDoubleUp, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDoubleUp' : _IconDoubleUp.name, _IconDoubleUp)
  },
})
