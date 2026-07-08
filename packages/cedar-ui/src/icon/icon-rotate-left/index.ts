import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconRotateLeft from './icon-rotate-left.vue';

export const IconRotateLeft = Object.assign(_IconRotateLeft, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconRotateLeft.name, _IconRotateLeft);
  }
});

export default IconRotateLeft;
