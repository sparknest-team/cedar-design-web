import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconScissor from './icon-scissor.vue'

export const IconScissor = Object.assign(_IconScissor, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconScissor' : _IconScissor.name, _IconScissor)
  },
})
