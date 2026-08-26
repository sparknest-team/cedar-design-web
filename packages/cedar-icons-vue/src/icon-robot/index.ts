import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconRobot from './icon-robot.vue'

export const IconRobot = Object.assign(_IconRobot, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconRobot' : _IconRobot.name, _IconRobot)
  },
})
