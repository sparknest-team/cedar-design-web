import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconExperiment from './icon-experiment.vue';

export const IconExperiment = Object.assign(_IconExperiment, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconExperiment.name, _IconExperiment);
  }
});

export default IconExperiment;
