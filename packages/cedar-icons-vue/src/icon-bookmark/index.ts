import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconBookmark from './icon-bookmark.vue'

export const IconBookmark = Object.assign(_IconBookmark, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconBookmark' : _IconBookmark.name, _IconBookmark)
  },
})
