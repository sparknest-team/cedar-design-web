import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconBarChart from './icon-bar-chart.vue'

export const IconBarChart = Object.assign(_IconBarChart, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconBarChart' : _IconBarChart.name, _IconBarChart)
  },
})
