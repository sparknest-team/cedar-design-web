import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconShareExternal from './icon-share-external.vue'

export const IconShareExternal = Object.assign(_IconShareExternal, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconShareExternal' : _IconShareExternal.name, _IconShareExternal)
  },
})
