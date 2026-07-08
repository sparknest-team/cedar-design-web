import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconArrowLeft from './icon-arrow-left.vue';

export const IconArrowLeft = Object.assign(_IconArrowLeft, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconArrowLeft.name, _IconArrowLeft);
  }
});

export default IconArrowLeft;
