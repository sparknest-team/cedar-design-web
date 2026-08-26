import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconArrowDown from './icon-arrow-down.vue'

export const IconArrowDown = Object.assign(_IconArrowDown, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconArrowDown' : _IconArrowDown.name, _IconArrowDown)
  },
})
