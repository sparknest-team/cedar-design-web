import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLock from './icon-lock.vue'

export const IconLock = Object.assign(_IconLock, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLock' : _IconLock.name, _IconLock)
  },
})
