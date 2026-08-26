import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconWoman from './icon-woman.vue'

export const IconWoman = Object.assign(_IconWoman, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconWoman' : _IconWoman.name, _IconWoman)
  },
})
