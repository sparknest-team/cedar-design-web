import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPlusCircleFill from './icon-plus-circle-fill.vue'

export const IconPlusCircleFill = Object.assign(_IconPlusCircleFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPlusCircleFill' : _IconPlusCircleFill.name, _IconPlusCircleFill)
  },
})
