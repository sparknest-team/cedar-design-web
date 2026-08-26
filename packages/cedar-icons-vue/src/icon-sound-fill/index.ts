import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSoundFill from './icon-sound-fill.vue'

export const IconSoundFill = Object.assign(_IconSoundFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSoundFill' : _IconSoundFill.name, _IconSoundFill)
  },
})
