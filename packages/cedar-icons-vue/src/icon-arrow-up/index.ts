import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconArrowUp from './icon-arrow-up.vue'

export const IconArrowUp = Object.assign(_IconArrowUp, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconArrowUp' : _IconArrowUp.name, _IconArrowUp)
  },
})
