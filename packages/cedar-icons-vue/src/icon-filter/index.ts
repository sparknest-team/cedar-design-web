import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFilter from './icon-filter.vue'

export const IconFilter = Object.assign(_IconFilter, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFilter' : _IconFilter.name, _IconFilter)
  },
})
