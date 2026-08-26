import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFullscreenExit from './icon-fullscreen-exit.vue'

export const IconFullscreenExit = Object.assign(_IconFullscreenExit, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFullscreenExit' : _IconFullscreenExit.name, _IconFullscreenExit)
  },
})
