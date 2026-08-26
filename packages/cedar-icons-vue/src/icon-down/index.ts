import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDown from './icon-down.vue'

export const IconDown = Object.assign(_IconDown, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDown' : _IconDown.name, _IconDown)
  },
})
