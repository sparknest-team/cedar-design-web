import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconPrinter from './icon-printer.vue'

export const IconPrinter = Object.assign(_IconPrinter, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconPrinter' : _IconPrinter.name, _IconPrinter)
  },
})
