import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMusic from './icon-music.vue'

export const IconMusic = Object.assign(_IconMusic, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMusic' : _IconMusic.name, _IconMusic)
  },
})
