import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconBug from './icon-bug.vue'

export const IconBug = Object.assign(_IconBug, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconBug' : _IconBug.name, _IconBug)
  },
})
