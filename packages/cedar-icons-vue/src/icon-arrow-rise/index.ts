import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconArrowRise from './icon-arrow-rise.vue'

export const IconArrowRise = Object.assign(_IconArrowRise, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconArrowRise' : _IconArrowRise.name, _IconArrowRise)
  },
})
