import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconStop from './icon-stop.vue'

export const IconStop = Object.assign(_IconStop, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconStop' : _IconStop.name, _IconStop)
  },
})
