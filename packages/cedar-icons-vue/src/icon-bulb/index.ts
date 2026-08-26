import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconBulb from './icon-bulb.vue'

export const IconBulb = Object.assign(_IconBulb, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconBulb' : _IconBulb.name, _IconBulb)
  },
})
