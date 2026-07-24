import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconDoubleLeft from './icon-double-left.vue';

export const IconDoubleLeft = Object.assign(_IconDoubleLeft, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDoubleLeft.name, _IconDoubleLeft);
  }
});

export default IconDoubleLeft;
