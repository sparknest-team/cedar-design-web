import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSchedule from './icon-schedule.vue'

export const IconSchedule = Object.assign(_IconSchedule, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSchedule' : _IconSchedule.name, _IconSchedule)
  },
})
