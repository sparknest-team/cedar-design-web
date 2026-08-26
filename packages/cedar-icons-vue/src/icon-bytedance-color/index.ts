import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconBytedanceColor from './icon-bytedance-color.vue'

export const IconBytedanceColor = Object.assign(_IconBytedanceColor, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconBytedanceColor' : _IconBytedanceColor.name, _IconBytedanceColor)
  },
})
