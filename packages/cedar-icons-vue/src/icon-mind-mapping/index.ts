import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMindMapping from './icon-mind-mapping.vue'

export const IconMindMapping = Object.assign(_IconMindMapping, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMindMapping' : _IconMindMapping.name, _IconMindMapping)
  },
})
