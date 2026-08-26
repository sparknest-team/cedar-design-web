import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconStrikethrough from './icon-strikethrough.vue'

export const IconStrikethrough = Object.assign(_IconStrikethrough, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconStrikethrough' : _IconStrikethrough.name, _IconStrikethrough)
  },
})
