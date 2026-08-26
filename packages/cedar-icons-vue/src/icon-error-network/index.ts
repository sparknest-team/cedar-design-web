import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconErrorNetwork from './icon-error-network.vue'

export const IconErrorNetwork = Object.assign(_IconErrorNetwork, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconErrorNetwork' : _IconErrorNetwork.name, _IconErrorNetwork)
  },
})
