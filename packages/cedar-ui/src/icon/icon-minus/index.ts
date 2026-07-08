import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMinus from './icon-minus.vue';

export const IconMinus = Object.assign(_IconMinus, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMinus.name, _IconMinus);
  }
});

export default IconMinus;
