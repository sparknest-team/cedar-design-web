import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSync from './icon-sync.vue'

export const IconSync = Object.assign(_IconSync, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSync' : _IconSync.name, _IconSync)
  },
})
