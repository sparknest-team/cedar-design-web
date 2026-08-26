import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconEye from './icon-eye.vue'

export const IconEye = Object.assign(_IconEye, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconEye' : _IconEye.name, _IconEye)
  },
})
