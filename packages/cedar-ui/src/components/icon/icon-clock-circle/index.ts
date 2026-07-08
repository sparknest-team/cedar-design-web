import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconClockCircle from './icon-clock-circle.vue';

export const IconClockCircle = Object.assign(_IconClockCircle, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconClockCircle.name, _IconClockCircle);
  }
});

export default IconClockCircle;
