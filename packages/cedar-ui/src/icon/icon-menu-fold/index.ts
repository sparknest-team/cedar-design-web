import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMenuFold from './icon-menu-fold.vue';

export const IconMenuFold = Object.assign(_IconMenuFold, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMenuFold.name, _IconMenuFold);
  }
});

export default IconMenuFold;
