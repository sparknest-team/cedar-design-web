import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFilter from './icon-filter.vue';

export const IconFilter = Object.assign(_IconFilter, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFilter.name, _IconFilter);
  }
});

export default IconFilter;
