import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPauseCircleFill from './icon-pause-circle-fill.vue'

export const IconPauseCircleFill = Object.assign(_IconPauseCircleFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPauseCircleFill' : _IconPauseCircleFill.name, _IconPauseCircleFill)
  },
})
