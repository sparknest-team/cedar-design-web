import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconStorage from './icon-storage.vue'

export const IconStorage = Object.assign(_IconStorage, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconStorage' : _IconStorage.name, _IconStorage)
  },
})
