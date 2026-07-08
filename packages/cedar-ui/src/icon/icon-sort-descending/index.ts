import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSortDescending from './icon-sort-descending.vue';

export const IconSortDescending = Object.assign(_IconSortDescending, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSortDescending.name, _IconSortDescending);
  }
});

export default IconSortDescending;
