import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPlusCircle from './icon-plus-circle.vue'

export const IconPlusCircle = Object.assign(_IconPlusCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPlusCircle' : _IconPlusCircle.name, _IconPlusCircle)
  },
})
