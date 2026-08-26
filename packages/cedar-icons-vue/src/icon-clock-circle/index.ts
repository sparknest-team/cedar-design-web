import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconClockCircle from './icon-clock-circle.vue'

export const IconClockCircle = Object.assign(_IconClockCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconClockCircle' : _IconClockCircle.name, _IconClockCircle)
  },
})
