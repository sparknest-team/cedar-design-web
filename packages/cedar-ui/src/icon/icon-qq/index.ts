import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconQq from './icon-qq.vue';

export const IconQq = Object.assign(_IconQq, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconQq.name, _IconQq);
  }
});

export default IconQq;
