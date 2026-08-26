import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconQuestion from './icon-question.vue'

export const IconQuestion = Object.assign(_IconQuestion, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconQuestion' : _IconQuestion.name, _IconQuestion)
  },
})
