import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPauseCircle from './icon-pause-circle.vue'

export const IconPauseCircle = Object.assign(_IconPauseCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPauseCircle' : _IconPauseCircle.name, _IconPauseCircle)
  },
})
