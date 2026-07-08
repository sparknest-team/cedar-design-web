import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconH4 from './icon-h4.vue';

export const IconH4 = Object.assign(_IconH4, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconH4.name, _IconH4);
  }
});

export default IconH4;
