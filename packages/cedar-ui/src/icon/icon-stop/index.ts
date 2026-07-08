import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconStop from './icon-stop.vue';

export const IconStop = Object.assign(_IconStop, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconStop.name, _IconStop);
  }
});

export default IconStop;
