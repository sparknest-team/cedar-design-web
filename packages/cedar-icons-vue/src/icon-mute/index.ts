import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMute from './icon-mute.vue'

export const IconMute = Object.assign(_IconMute, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMute' : _IconMute.name, _IconMute)
  },
})
