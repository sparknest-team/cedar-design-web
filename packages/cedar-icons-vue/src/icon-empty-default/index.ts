import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconEmptyDefault from './icon-empty-default.vue'

export const IconEmptyDefault = Object.assign(_IconEmptyDefault, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconEmptyDefault' : _IconEmptyDefault.name, _IconEmptyDefault)
  },
})
