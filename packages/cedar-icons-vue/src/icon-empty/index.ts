import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconEmpty from './icon-empty.vue'

export const IconEmpty = Object.assign(_IconEmpty, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconEmpty' : _IconEmpty.name, _IconEmpty)
  },
})
