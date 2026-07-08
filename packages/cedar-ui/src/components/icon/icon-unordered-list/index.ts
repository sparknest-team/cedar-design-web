import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconUnorderedList from './icon-unordered-list.vue';

export const IconUnorderedList = Object.assign(_IconUnorderedList, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconUnorderedList.name, _IconUnorderedList);
  }
});

export default IconUnorderedList;
