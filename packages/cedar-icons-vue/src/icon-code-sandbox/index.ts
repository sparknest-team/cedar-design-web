import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCodeSandbox from './icon-code-sandbox.vue'

export const IconCodeSandbox = Object.assign(_IconCodeSandbox, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCodeSandbox' : _IconCodeSandbox.name, _IconCodeSandbox)
  },
})
