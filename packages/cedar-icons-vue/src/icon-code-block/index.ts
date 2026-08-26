import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCodeBlock from './icon-code-block.vue'

export const IconCodeBlock = Object.assign(_IconCodeBlock, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCodeBlock' : _IconCodeBlock.name, _IconCodeBlock)
  },
})
