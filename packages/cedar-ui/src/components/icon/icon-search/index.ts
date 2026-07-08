import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSearch from './icon-search.vue';

export const IconSearch = Object.assign(_IconSearch, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSearch.name, _IconSearch);
  }
});

export default IconSearch;
