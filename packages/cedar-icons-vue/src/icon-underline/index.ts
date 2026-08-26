import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconUnderline from './icon-underline.vue'

export const IconUnderline = Object.assign(_IconUnderline, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconUnderline' : _IconUnderline.name, _IconUnderline)
  },
})
