import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconInfoCircle from './icon-info-circle.vue'

export const IconInfoCircle = Object.assign(_IconInfoCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconInfoCircle' : _IconInfoCircle.name, _IconInfoCircle)
  },
})
