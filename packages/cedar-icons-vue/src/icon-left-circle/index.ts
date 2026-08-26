import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLeftCircle from './icon-left-circle.vue'

export const IconLeftCircle = Object.assign(_IconLeftCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLeftCircle' : _IconLeftCircle.name, _IconLeftCircle)
  },
})
