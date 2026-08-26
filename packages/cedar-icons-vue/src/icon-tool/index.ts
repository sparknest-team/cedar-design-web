import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconTool from './icon-tool.vue'

export const IconTool = Object.assign(_IconTool, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconTool' : _IconTool.name, _IconTool)
  },
})
