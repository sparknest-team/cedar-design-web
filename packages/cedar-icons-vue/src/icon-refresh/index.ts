import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconRefresh from './icon-refresh.vue'

export const IconRefresh = Object.assign(_IconRefresh, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconRefresh' : _IconRefresh.name, _IconRefresh)
  },
})
