import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMuteFill from './icon-mute-fill.vue'

export const IconMuteFill = Object.assign(_IconMuteFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMuteFill' : _IconMuteFill.name, _IconMuteFill)
  },
})
