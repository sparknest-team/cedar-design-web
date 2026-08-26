import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCloseCircle from './icon-close-circle.vue'

export const IconCloseCircle = Object.assign(_IconCloseCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCloseCircle' : _IconCloseCircle.name, _IconCloseCircle)
  },
})
