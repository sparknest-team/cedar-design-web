import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCalendarClock from './icon-calendar-clock.vue'

export const IconCalendarClock = Object.assign(_IconCalendarClock, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCalendarClock' : _IconCalendarClock.name, _IconCalendarClock)
  },
})
