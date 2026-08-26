import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconThumbDown from './icon-thumb-down.vue'

export const IconThumbDown = Object.assign(_IconThumbDown, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconThumbDown' : _IconThumbDown.name, _IconThumbDown)
  },
})
