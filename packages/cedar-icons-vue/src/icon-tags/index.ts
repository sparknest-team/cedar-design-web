import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconTags from './icon-tags.vue'

export const IconTags = Object.assign(_IconTags, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconTags' : _IconTags.name, _IconTags)
  },
})
