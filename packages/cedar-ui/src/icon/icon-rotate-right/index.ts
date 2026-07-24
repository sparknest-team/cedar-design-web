import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconRotateRight from './icon-rotate-right.vue';

export const IconRotateRight = Object.assign(_IconRotateRight, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconRotateRight.name, _IconRotateRight);
  }
});

export default IconRotateRight;
