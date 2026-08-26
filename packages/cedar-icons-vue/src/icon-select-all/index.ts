import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSelectAll from './icon-select-all.vue'

export const IconSelectAll = Object.assign(_IconSelectAll, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSelectAll' : _IconSelectAll.name, _IconSelectAll)
  },
})
