import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconAlignLeft from './icon-align-left.vue';

export const IconAlignLeft = Object.assign(_IconAlignLeft, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconAlignLeft.name, _IconAlignLeft);
  }
});

export default IconAlignLeft;
