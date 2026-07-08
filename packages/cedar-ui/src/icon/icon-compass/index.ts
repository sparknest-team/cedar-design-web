import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconCompass from './icon-compass.vue';

export const IconCompass = Object.assign(_IconCompass, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCompass.name, _IconCompass);
  }
});

export default IconCompass;
