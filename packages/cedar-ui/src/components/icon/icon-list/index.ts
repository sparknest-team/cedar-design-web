import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconList from './icon-list.vue';

export const IconList = Object.assign(_IconList, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconList.name, _IconList);
  }
});

export default IconList;
