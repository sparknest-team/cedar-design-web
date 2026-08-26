import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconForward from './icon-forward.vue'

export const IconForward = Object.assign(_IconForward, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconForward' : _IconForward.name, _IconForward)
  },
})
