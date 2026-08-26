import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconTrophy from './icon-trophy.vue'

export const IconTrophy = Object.assign(_IconTrophy, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconTrophy' : _IconTrophy.name, _IconTrophy)
  },
})
