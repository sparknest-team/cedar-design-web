import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFileVideo from './icon-file-video.vue'

export const IconFileVideo = Object.assign(_IconFileVideo, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFileVideo' : _IconFileVideo.name, _IconFileVideo)
  },
})
