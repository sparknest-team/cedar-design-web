import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLanguage from './icon-language.vue'

export const IconLanguage = Object.assign(_IconLanguage, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLanguage' : _IconLanguage.name, _IconLanguage)
  },
})
