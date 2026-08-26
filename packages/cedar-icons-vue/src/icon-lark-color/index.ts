import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLarkColor from './icon-lark-color.vue'

export const IconLarkColor = Object.assign(_IconLarkColor, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLarkColor' : _IconLarkColor.name, _IconLarkColor)
  },
})
