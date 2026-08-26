import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconArrowLeft from './icon-arrow-left.vue'

export const IconArrowLeft = Object.assign(_IconArrowLeft, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconArrowLeft' : _IconArrowLeft.name, _IconArrowLeft)
  },
})
