import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconXiguaColor from './icon-xigua-color.vue'

export const IconXiguaColor = Object.assign(_IconXiguaColor, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconXiguaColor' : _IconXiguaColor.name, _IconXiguaColor)
  },
})
