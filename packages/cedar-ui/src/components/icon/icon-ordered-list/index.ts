import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconOrderedList from './icon-ordered-list.vue';

export const IconOrderedList = Object.assign(_IconOrderedList, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconOrderedList.name, _IconOrderedList);
  }
});

export default IconOrderedList;
