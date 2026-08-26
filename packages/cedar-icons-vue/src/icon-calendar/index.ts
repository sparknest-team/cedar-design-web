import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCalendar from './icon-calendar.vue'

export const IconCalendar = Object.assign(_IconCalendar, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCalendar' : _IconCalendar.name, _IconCalendar)
  },
})
