import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFire from './icon-fire.vue'

export const IconFire = Object.assign(_IconFire, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFire' : _IconFire.name, _IconFire)
  },
})
