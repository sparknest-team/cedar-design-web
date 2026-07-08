import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconToTop from './icon-to-top.vue';

export const IconToTop = Object.assign(_IconToTop, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconToTop.name, _IconToTop);
  }
});

export default IconToTop;
