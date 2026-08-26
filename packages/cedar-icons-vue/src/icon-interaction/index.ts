import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconInteraction from './icon-interaction.vue'

export const IconInteraction = Object.assign(_IconInteraction, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconInteraction' : _IconInteraction.name, _IconInteraction)
  },
})
