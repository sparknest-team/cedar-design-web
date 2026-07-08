import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconDoubleDown from './icon-double-down.vue';

export const IconDoubleDown = Object.assign(_IconDoubleDown, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDoubleDown.name, _IconDoubleDown);
  }
});

export default IconDoubleDown;
