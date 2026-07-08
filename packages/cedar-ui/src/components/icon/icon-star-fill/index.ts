import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconStarFill from './icon-star-fill.vue';

export const IconStarFill = Object.assign(_IconStarFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconStarFill.name, _IconStarFill);
  }
});

export default IconStarFill;
