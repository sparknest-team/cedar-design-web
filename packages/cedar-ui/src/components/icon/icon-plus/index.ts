import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconPlus from './icon-plus.vue';

export const IconPlus = Object.assign(_IconPlus, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPlus.name, _IconPlus);
  }
});

export default IconPlus;
