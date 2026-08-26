import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconVoice from './icon-voice.vue'

export const IconVoice = Object.assign(_IconVoice, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconVoice' : _IconVoice.name, _IconVoice)
  },
})
