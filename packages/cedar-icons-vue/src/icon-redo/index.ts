import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconRedo from './icon-redo.vue'

export const IconRedo = Object.assign(_IconRedo, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconRedo' : _IconRedo.name, _IconRedo)
  },
})
