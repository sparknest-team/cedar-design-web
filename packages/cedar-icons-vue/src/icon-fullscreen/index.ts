import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFullscreen from './icon-fullscreen.vue'

export const IconFullscreen = Object.assign(_IconFullscreen, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFullscreen' : _IconFullscreen.name, _IconFullscreen)
  },
})
