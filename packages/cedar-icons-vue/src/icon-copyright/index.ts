import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCopyright from './icon-copyright.vue'

export const IconCopyright = Object.assign(_IconCopyright, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCopyright' : _IconCopyright.name, _IconCopyright)
  },
})
