import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMoonFill from './icon-moon-fill.vue';

export const IconMoonFill = Object.assign(_IconMoonFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMoonFill.name, _IconMoonFill);
  }
});

export default IconMoonFill;
