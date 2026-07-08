import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconExclamationCircleFill from './icon-exclamation-circle-fill.vue';

export const IconExclamationCircleFill = Object.assign(_IconExclamationCircleFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconExclamationCircleFill.name, _IconExclamationCircleFill);
  }
});

export default IconExclamationCircleFill;
