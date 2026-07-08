import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMore from './icon-more.vue';

export const IconMore = Object.assign(_IconMore, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMore.name, _IconMore);
  }
});

export default IconMore;
