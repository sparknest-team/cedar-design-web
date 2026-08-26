import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconGitlab from './icon-gitlab.vue'

export const IconGitlab = Object.assign(_IconGitlab, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconGitlab' : _IconGitlab.name, _IconGitlab)
  },
})
