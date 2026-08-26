import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFindReplace from './icon-find-replace.vue'

export const IconFindReplace = Object.assign(_IconFindReplace, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFindReplace' : _IconFindReplace.name, _IconFindReplace)
  },
})
