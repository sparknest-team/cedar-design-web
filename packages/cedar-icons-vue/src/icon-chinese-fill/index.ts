import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconChineseFill from './icon-chinese-fill.vue'

export const IconChineseFill = Object.assign(_IconChineseFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconChineseFill' : _IconChineseFill.name, _IconChineseFill)
  },
})
