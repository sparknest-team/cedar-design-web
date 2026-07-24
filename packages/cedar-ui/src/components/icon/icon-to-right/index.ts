import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconToRight from './icon-to-right.vue';

export const IconToRight = Object.assign(_IconToRight, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconToRight.name, _IconToRight);
  }
});

export default IconToRight;
