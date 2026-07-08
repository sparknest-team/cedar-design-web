import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSelectAll from './icon-select-all.vue';

export const IconSelectAll = Object.assign(_IconSelectAll, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSelectAll.name, _IconSelectAll);
  }
});

export default IconSelectAll;
