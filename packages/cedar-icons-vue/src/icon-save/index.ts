import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSave from './icon-save.vue'

export const IconSave = Object.assign(_IconSave, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSave' : _IconSave.name, _IconSave)
  },
})
