import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconIdcard from './icon-idcard.vue'

export const IconIdcard = Object.assign(_IconIdcard, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconIdcard' : _IconIdcard.name, _IconIdcard)
  },
})
