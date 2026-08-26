import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconDice from './icon-dice.vue'

export const IconDice = Object.assign(_IconDice, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconDice' : _IconDice.name, _IconDice)
  },
})
