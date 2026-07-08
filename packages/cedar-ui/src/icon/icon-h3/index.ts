import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconH3 from './icon-h3.vue';

export const IconH3 = Object.assign(_IconH3, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconH3.name, _IconH3);
  }
});

export default IconH3;
