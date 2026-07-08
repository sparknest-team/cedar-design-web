import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconWoman from './icon-woman.vue';

export const IconWoman = Object.assign(_IconWoman, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconWoman.name, _IconWoman);
  }
});

export default IconWoman;
