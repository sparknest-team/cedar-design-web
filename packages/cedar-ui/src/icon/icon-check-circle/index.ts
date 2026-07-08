import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconCheckCircle from './icon-check-circle.vue';

export const IconCheckCircle = Object.assign(_IconCheckCircle, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCheckCircle.name, _IconCheckCircle);
  }
});

export default IconCheckCircle;
