import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconWeibo from './icon-weibo.vue'

export const IconWeibo = Object.assign(_IconWeibo, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconWeibo' : _IconWeibo.name, _IconWeibo)
  },
})
