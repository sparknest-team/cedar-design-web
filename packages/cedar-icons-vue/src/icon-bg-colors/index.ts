import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconBgColors from './icon-bg-colors.vue'

export const IconBgColors = Object.assign(_IconBgColors, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconBgColors' : _IconBgColors.name, _IconBgColors)
  },
})
