import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconFormula from './icon-formula.vue'

export const IconFormula = Object.assign(_IconFormula, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconFormula' : _IconFormula.name, _IconFormula)
  },
})
