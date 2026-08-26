import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDesktop from './icon-desktop.vue'

export const IconDesktop = Object.assign(_IconDesktop, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDesktop' : _IconDesktop.name, _IconDesktop)
  },
})
