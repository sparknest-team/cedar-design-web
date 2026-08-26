import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconWeiboCircleFill from './icon-weibo-circle-fill.vue'

export const IconWeiboCircleFill = Object.assign(_IconWeiboCircleFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconWeiboCircleFill' : _IconWeiboCircleFill.name, _IconWeiboCircleFill)
  },
})
