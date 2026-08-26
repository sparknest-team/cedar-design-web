import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconQq from './icon-qq.vue'

export const IconQq = Object.assign(_IconQq, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconQq' : _IconQq.name, _IconQq)
  },
})
