import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconRecordStop from './icon-record-stop.vue'

export const IconRecordStop = Object.assign(_IconRecordStop, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconRecordStop' : _IconRecordStop.name, _IconRecordStop)
  },
})
