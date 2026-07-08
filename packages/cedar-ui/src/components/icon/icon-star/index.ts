import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconStar from './icon-star.vue';

export const IconStar = Object.assign(_IconStar, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconStar.name, _IconStar);
  }
});

export default IconStar;
