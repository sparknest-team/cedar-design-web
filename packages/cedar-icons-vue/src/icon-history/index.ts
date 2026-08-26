import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconHistory from './icon-history.vue'

export const IconHistory = Object.assign(_IconHistory, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconHistory' : _IconHistory.name, _IconHistory)
  },
})
