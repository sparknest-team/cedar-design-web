import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPen from './icon-pen.vue'

export const IconPen = Object.assign(_IconPen, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPen' : _IconPen.name, _IconPen)
  },
})
