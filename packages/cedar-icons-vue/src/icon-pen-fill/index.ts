import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPenFill from './icon-pen-fill.vue'

export const IconPenFill = Object.assign(_IconPenFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPenFill' : _IconPenFill.name, _IconPenFill)
  },
})
