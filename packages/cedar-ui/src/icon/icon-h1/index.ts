import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconH1 from './icon-h1.vue';

export const IconH1 = Object.assign(_IconH1, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconH1.name, _IconH1);
  }
});

export default IconH1;
