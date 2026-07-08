import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconLocation from './icon-location.vue';

export const IconLocation = Object.assign(_IconLocation, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLocation.name, _IconLocation);
  }
});

export default IconLocation;
