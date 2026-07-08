import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconDown from './icon-down.vue';

export const IconDown = Object.assign(_IconDown, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDown.name, _IconDown);
  }
});

export default IconDown;
