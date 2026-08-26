import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPlus from './icon-plus.vue'

export const IconPlus = Object.assign(_IconPlus, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPlus' : _IconPlus.name, _IconPlus)
  },
})
