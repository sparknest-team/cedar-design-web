import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMore from './icon-more.vue'

export const IconMore = Object.assign(_IconMore, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMore' : _IconMore.name, _IconMore)
  },
})
