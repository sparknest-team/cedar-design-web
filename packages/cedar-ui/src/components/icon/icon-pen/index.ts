import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPen from './icon-pen.vue';

export const IconPen = Object.assign(_IconPen, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPen.name, _IconPen);
  }
});

export default IconPen;
