import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconArrowUp from './icon-arrow-up.vue';

export const IconArrowUp = Object.assign(_IconArrowUp, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconArrowUp.name, _IconArrowUp);
  }
});

export default IconArrowUp;
