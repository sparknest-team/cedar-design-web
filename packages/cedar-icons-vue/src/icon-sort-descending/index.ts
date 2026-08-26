import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSortDescending from './icon-sort-descending.vue'

export const IconSortDescending = Object.assign(_IconSortDescending, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSortDescending' : _IconSortDescending.name, _IconSortDescending)
  },
})
