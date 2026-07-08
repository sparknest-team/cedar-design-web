import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPushpin from './icon-pushpin.vue';

export const IconPushpin = Object.assign(_IconPushpin, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPushpin.name, _IconPushpin);
  }
});

export default IconPushpin;
