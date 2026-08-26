import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconShake from './icon-shake.vue'

export const IconShake = Object.assign(_IconShake, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconShake' : _IconShake.name, _IconShake)
  },
})
