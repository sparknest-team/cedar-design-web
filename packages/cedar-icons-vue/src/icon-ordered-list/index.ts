import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconOrderedList from './icon-ordered-list.vue'

export const IconOrderedList = Object.assign(_IconOrderedList, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconOrderedList' : _IconOrderedList.name, _IconOrderedList)
  },
})
