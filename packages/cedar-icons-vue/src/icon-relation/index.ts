import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconRelation from './icon-relation.vue'

export const IconRelation = Object.assign(_IconRelation, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconRelation' : _IconRelation.name, _IconRelation)
  },
})
