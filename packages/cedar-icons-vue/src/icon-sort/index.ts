import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSort from './icon-sort.vue'

export const IconSort = Object.assign(_IconSort, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSort' : _IconSort.name, _IconSort)
  },
})
