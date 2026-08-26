import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconExpand from './icon-expand.vue'

export const IconExpand = Object.assign(_IconExpand, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconExpand' : _IconExpand.name, _IconExpand)
  },
})
