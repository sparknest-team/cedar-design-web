import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconH7 from './icon-h7.vue';

export const IconH7 = Object.assign(_IconH7, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconH7.name, _IconH7);
  }
});

export default IconH7;
