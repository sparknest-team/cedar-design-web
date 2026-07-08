import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconBarChart from './icon-bar-chart.vue';

export const IconBarChart = Object.assign(_IconBarChart, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconBarChart.name, _IconBarChart);
  }
});

export default IconBarChart;
