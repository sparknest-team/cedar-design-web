import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconTiktokColor from './icon-tiktok-color.vue'

export const IconTiktokColor = Object.assign(_IconTiktokColor, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconTiktokColor' : _IconTiktokColor.name, _IconTiktokColor)
  },
})
