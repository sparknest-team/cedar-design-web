import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconUnorderedList from './icon-unordered-list.vue'

export const IconUnorderedList = Object.assign(_IconUnorderedList, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconUnorderedList' : _IconUnorderedList.name, _IconUnorderedList)
  },
})
