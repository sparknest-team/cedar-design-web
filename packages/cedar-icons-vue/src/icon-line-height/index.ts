import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLineHeight from './icon-line-height.vue'

export const IconLineHeight = Object.assign(_IconLineHeight, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLineHeight' : _IconLineHeight.name, _IconLineHeight)
  },
})
