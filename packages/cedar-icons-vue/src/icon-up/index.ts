import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconUp from './icon-up.vue'

export const IconUp = Object.assign(_IconUp, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconUp' : _IconUp.name, _IconUp)
  },
})
