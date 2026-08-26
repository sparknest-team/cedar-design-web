import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLoading from './icon-loading.vue'

export const IconLoading = Object.assign(_IconLoading, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLoading' : _IconLoading.name, _IconLoading)
  },
})
