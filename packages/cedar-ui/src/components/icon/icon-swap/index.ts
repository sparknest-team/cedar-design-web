import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSwap from './icon-swap.vue';

export const IconSwap = Object.assign(_IconSwap, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSwap.name, _IconSwap);
  }
});

export default IconSwap;
