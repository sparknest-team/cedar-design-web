import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconMan from './icon-man.vue'

export const IconMan = Object.assign(_IconMan, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconMan' : _IconMan.name, _IconMan)
  },
})
