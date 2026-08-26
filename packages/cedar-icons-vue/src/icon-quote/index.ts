import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconQuote from './icon-quote.vue'

export const IconQuote = Object.assign(_IconQuote, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconQuote' : _IconQuote.name, _IconQuote)
  },
})
