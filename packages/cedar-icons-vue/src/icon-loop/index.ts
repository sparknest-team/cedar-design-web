import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLoop from './icon-loop.vue'

export const IconLoop = Object.assign(_IconLoop, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLoop' : _IconLoop.name, _IconLoop)
  },
})
