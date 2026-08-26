import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPause from './icon-pause.vue'

export const IconPause = Object.assign(_IconPause, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPause' : _IconPause.name, _IconPause)
  },
})
