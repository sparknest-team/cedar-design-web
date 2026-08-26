import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconShrink from './icon-shrink.vue'

export const IconShrink = Object.assign(_IconShrink, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconShrink' : _IconShrink.name, _IconShrink)
  },
})
