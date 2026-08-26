import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPublic from './icon-public.vue'

export const IconPublic = Object.assign(_IconPublic, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPublic' : _IconPublic.name, _IconPublic)
  },
})
