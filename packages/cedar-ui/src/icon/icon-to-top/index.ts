import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconToTop from './icon-to-top.vue';

export const IconToTop = Object.assign(_IconToTop, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconToTop.name, _IconToTop);
  }
});

export default IconToTop;
