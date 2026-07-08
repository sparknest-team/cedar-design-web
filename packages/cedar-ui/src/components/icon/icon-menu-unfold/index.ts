import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMenuUnfold from './icon-menu-unfold.vue';

export const IconMenuUnfold = Object.assign(_IconMenuUnfold, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMenuUnfold.name, _IconMenuUnfold);
  }
});

export default IconMenuUnfold;
