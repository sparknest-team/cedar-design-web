import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconRight from './icon-right.vue';

export const IconRight = Object.assign(_IconRight, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconRight.name, _IconRight);
  }
});

export default IconRight;
