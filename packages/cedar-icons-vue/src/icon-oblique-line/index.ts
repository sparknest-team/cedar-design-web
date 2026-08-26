import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconObliqueLine from './icon-oblique-line.vue'

export const IconObliqueLine = Object.assign(_IconObliqueLine, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconObliqueLine' : _IconObliqueLine.name, _IconObliqueLine)
  },
})
