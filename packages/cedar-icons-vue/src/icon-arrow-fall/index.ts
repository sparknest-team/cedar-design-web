import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconArrowFall from './icon-arrow-fall.vue'

export const IconArrowFall = Object.assign(_IconArrowFall, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconArrowFall' : _IconArrowFall.name, _IconArrowFall)
  },
})
