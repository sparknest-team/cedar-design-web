import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCode from './icon-code.vue'

export const IconCode = Object.assign(_IconCode, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCode' : _IconCode.name, _IconCode)
  },
})
