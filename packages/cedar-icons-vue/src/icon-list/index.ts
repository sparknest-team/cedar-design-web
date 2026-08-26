import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconList from './icon-list.vue'

export const IconList = Object.assign(_IconList, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconList' : _IconList.name, _IconList)
  },
})
