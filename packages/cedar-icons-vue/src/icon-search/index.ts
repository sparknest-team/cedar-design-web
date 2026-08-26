import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSearch from './icon-search.vue'

export const IconSearch = Object.assign(_IconSearch, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSearch' : _IconSearch.name, _IconSearch)
  },
})
