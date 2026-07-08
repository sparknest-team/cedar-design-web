import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconDoubleUp from './icon-double-up.vue';

export const IconDoubleUp = Object.assign(_IconDoubleUp, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDoubleUp.name, _IconDoubleUp);
  }
});

export default IconDoubleUp;
