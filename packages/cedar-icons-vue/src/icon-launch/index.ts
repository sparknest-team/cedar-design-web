import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLaunch from './icon-launch.vue'

export const IconLaunch = Object.assign(_IconLaunch, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLaunch' : _IconLaunch.name, _IconLaunch)
  },
})
