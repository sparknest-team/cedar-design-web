import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDoubleRight from './icon-double-right.vue'

export const IconDoubleRight = Object.assign(_IconDoubleRight, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDoubleRight' : _IconDoubleRight.name, _IconDoubleRight)
  },
})
