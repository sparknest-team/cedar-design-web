import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconBranch from './icon-branch.vue'

export const IconBranch = Object.assign(_IconBranch, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconBranch' : _IconBranch.name, _IconBranch)
  },
})
