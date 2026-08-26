import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconVideoCamera from './icon-video-camera.vue'

export const IconVideoCamera = Object.assign(_IconVideoCamera, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconVideoCamera' : _IconVideoCamera.name, _IconVideoCamera)
  },
})
