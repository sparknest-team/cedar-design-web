import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconWifi from './icon-wifi.vue';

export const IconWifi = Object.assign(_IconWifi, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconWifi.name, _IconWifi);
  }
});

export default IconWifi;
