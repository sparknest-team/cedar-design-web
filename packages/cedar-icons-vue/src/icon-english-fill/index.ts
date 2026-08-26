import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconEnglishFill from './icon-english-fill.vue'

export const IconEnglishFill = Object.assign(_IconEnglishFill, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconEnglishFill' : _IconEnglishFill.name, _IconEnglishFill)
  },
})
