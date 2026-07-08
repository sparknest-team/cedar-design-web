import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconAlignCenter from './icon-align-center.vue';

export const IconAlignCenter = Object.assign(_IconAlignCenter, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconAlignCenter.name, _IconAlignCenter);
  }
});

export default IconAlignCenter;
