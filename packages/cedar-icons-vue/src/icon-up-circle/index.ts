import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconUpCircle from './icon-up-circle.vue'

export const IconUpCircle = Object.assign(_IconUpCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconUpCircle' : _IconUpCircle.name, _IconUpCircle)
  },
})
