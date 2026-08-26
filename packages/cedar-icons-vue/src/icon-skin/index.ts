import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSkin from './icon-skin.vue'

export const IconSkin = Object.assign(_IconSkin, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSkin' : _IconSkin.name, _IconSkin)
  },
})
