import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconArrowRight from './icon-arrow-right.vue'

export const IconArrowRight = Object.assign(_IconArrowRight, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconArrowRight' : _IconArrowRight.name, _IconArrowRight)
  },
})
