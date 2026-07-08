import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconExclamationCircle from './icon-exclamation-circle.vue';

export const IconExclamationCircle = Object.assign(_IconExclamationCircle, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconExclamationCircle.name, _IconExclamationCircle);
  }
});

export default IconExclamationCircle;
