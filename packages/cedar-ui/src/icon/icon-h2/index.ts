import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconH2 from './icon-h2.vue';

export const IconH2 = Object.assign(_IconH2, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconH2.name, _IconH2);
  }
});

export default IconH2;
