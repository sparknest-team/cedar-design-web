import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconToLeft from './icon-to-left.vue';

export const IconToLeft = Object.assign(_IconToLeft, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconToLeft.name, _IconToLeft);
  }
});

export default IconToLeft;
