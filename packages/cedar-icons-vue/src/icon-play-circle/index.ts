import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPlayCircle from './icon-play-circle.vue'

export const IconPlayCircle = Object.assign(_IconPlayCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPlayCircle' : _IconPlayCircle.name, _IconPlayCircle)
  },
})
