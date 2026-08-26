import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconSubscribeAdd from './icon-subscribe-add.vue'

export const IconSubscribeAdd = Object.assign(_IconSubscribeAdd, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconSubscribeAdd' : _IconSubscribeAdd.name, _IconSubscribeAdd)
  },
})
