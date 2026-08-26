import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCloud from './icon-cloud.vue'

export const IconCloud = Object.assign(_IconCloud, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCloud' : _IconCloud.name, _IconCloud)
  },
})
