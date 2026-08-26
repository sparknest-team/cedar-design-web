import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLink from './icon-link.vue'

export const IconLink = Object.assign(_IconLink, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLink' : _IconLink.name, _IconLink)
  },
})
