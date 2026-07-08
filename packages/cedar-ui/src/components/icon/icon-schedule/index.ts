import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSchedule from './icon-schedule.vue';

export const IconSchedule = Object.assign(_IconSchedule, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSchedule.name, _IconSchedule);
  }
});

export default IconSchedule;
