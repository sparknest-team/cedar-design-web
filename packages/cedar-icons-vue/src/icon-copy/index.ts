import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCopy from './icon-copy.vue'

export const IconCopy = Object.assign(_IconCopy, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCopy' : _IconCopy.name, _IconCopy)
  },
})
