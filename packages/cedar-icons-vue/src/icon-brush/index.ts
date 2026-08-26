import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconBrush from './icon-brush.vue'

export const IconBrush = Object.assign(_IconBrush, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconBrush' : _IconBrush.name, _IconBrush)
  },
})
