import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconInfo from './icon-info.vue'

export const IconInfo = Object.assign(_IconInfo, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconInfo' : _IconInfo.name, _IconInfo)
  },
})
