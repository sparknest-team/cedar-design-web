import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconBook from './icon-book.vue'

export const IconBook = Object.assign(_IconBook, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconBook' : _IconBook.name, _IconBook)
  },
})
