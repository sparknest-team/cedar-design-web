import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDashboard from './icon-dashboard.vue'

export const IconDashboard = Object.assign(_IconDashboard, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDashboard' : _IconDashboard.name, _IconDashboard)
  },
})
