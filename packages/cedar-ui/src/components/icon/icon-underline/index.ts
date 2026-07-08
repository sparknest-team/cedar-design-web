import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconUnderline from './icon-underline.vue';

export const IconUnderline = Object.assign(_IconUnderline, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconUnderline.name, _IconUnderline);
  }
});

export default IconUnderline;
