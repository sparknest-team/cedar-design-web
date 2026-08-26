import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSafe from './icon-safe.vue'

export const IconSafe = Object.assign(_IconSafe, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSafe' : _IconSafe.name, _IconSafe)
  },
})
