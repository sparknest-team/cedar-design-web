import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMenuUnfold from './icon-menu-unfold.vue'

export const IconMenuUnfold = Object.assign(_IconMenuUnfold, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMenuUnfold' : _IconMenuUnfold.name, _IconMenuUnfold)
  },
})
