import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconCheckSquare from './icon-check-square.vue';

export const IconCheckSquare = Object.assign(_IconCheckSquare, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCheckSquare.name, _IconCheckSquare);
  }
});

export default IconCheckSquare;
