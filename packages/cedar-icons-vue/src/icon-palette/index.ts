import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPalette from './icon-palette.vue'

export const IconPalette = Object.assign(_IconPalette, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPalette' : _IconPalette.name, _IconPalette)
  },
})
