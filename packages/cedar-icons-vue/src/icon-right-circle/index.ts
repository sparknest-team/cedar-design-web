import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconRightCircle from './icon-right-circle.vue'

export const IconRightCircle = Object.assign(_IconRightCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconRightCircle' : _IconRightCircle.name, _IconRightCircle)
  },
})
