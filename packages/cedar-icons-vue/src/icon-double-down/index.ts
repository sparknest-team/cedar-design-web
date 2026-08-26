import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDoubleDown from './icon-double-down.vue'

export const IconDoubleDown = Object.assign(_IconDoubleDown, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDoubleDown' : _IconDoubleDown.name, _IconDoubleDown)
  },
})
