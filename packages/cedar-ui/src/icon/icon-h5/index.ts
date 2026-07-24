import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconH5 from './icon-h5.vue';

export const IconH5 = Object.assign(_IconH5, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconH5.name, _IconH5);
  }
});

export default IconH5;
