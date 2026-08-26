import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconAt from './icon-at.vue'

export const IconAt = Object.assign(_IconAt, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconAt' : _IconAt.name, _IconAt)
  },
})
