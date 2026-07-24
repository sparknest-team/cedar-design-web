import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconSort from './icon-sort.vue';

export const IconSort = Object.assign(_IconSort, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSort.name, _IconSort);
  }
});

export default IconSort;
