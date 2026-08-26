import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSound from './icon-sound.vue'

export const IconSound = Object.assign(_IconSound, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSound' : _IconSound.name, _IconSound)
  },
})
