import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconLiveBroadcast from './icon-live-broadcast.vue'

export const IconLiveBroadcast = Object.assign(_IconLiveBroadcast, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconLiveBroadcast' : _IconLiveBroadcast.name, _IconLiveBroadcast)
  },
})
