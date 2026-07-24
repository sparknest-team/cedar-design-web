import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconArrowRight from './icon-arrow-right.vue';

export const IconArrowRight = Object.assign(_IconArrowRight, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconArrowRight.name, _IconArrowRight);
  }
});

export default IconArrowRight;
