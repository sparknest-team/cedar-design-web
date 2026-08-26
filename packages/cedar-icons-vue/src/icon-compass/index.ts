import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCompass from './icon-compass.vue'

export const IconCompass = Object.assign(_IconCompass, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCompass' : _IconCompass.name, _IconCompass)
  },
})
