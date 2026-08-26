import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconTag from './icon-tag.vue'

export const IconTag = Object.assign(_IconTag, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconTag' : _IconTag.name, _IconTag)
  },
})
