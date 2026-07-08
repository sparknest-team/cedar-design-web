import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconCodeSquare from './icon-code-square.vue';

export const IconCodeSquare = Object.assign(_IconCodeSquare, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCodeSquare.name, _IconCodeSquare);
  }
});

export default IconCodeSquare;
