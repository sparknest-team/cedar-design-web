import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconH6 from './icon-h6.vue';

export const IconH6 = Object.assign(_IconH6, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconH6.name, _IconH6);
  }
});

export default IconH6;
