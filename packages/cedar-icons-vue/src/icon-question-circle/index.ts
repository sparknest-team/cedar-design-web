import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconQuestionCircle from './icon-question-circle.vue'

export const IconQuestionCircle = Object.assign(_IconQuestionCircle, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconQuestionCircle' : _IconQuestionCircle.name, _IconQuestionCircle)
  },
})
