import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCommand from './icon-command.vue'

export const IconCommand = Object.assign(_IconCommand, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCommand' : _IconCommand.name, _IconCommand)
  },
})
