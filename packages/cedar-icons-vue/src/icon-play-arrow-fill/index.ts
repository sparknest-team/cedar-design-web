import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPlayArrowFill from './icon-play-arrow-fill.vue'

export const IconPlayArrowFill = Object.assign(_IconPlayArrowFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPlayArrowFill' : _IconPlayArrowFill.name, _IconPlayArrowFill)
  },
})
