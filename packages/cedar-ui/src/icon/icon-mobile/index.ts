import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMobile from './icon-mobile.vue';

export const IconMobile = Object.assign(_IconMobile, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMobile.name, _IconMobile);
  }
});

export default IconMobile;
