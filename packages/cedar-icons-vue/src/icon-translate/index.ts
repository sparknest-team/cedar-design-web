import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconTranslate from './icon-translate.vue'

export const IconTranslate = Object.assign(_IconTranslate, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconTranslate' : _IconTranslate.name, _IconTranslate)
  },
})
