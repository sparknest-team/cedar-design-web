import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconSortAscending from './icon-sort-ascending.vue';

export const IconSortAscending = Object.assign(_IconSortAscending, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSortAscending.name, _IconSortAscending);
  }
});

export default IconSortAscending;
