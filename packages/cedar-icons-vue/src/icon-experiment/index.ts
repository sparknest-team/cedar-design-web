import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconExperiment from './icon-experiment.vue'

export const IconExperiment = Object.assign(_IconExperiment, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconExperiment' : _IconExperiment.name, _IconExperiment)
  },
})
