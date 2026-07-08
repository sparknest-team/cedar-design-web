import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPoweroff from './icon-poweroff.vue';

export const IconPoweroff = Object.assign(_IconPoweroff, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPoweroff.name, _IconPoweroff);
  }
});

export default IconPoweroff;
