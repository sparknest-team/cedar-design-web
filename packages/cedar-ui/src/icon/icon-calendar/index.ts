import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconCalendar from './icon-calendar.vue';

export const IconCalendar = Object.assign(_IconCalendar, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCalendar.name, _IconCalendar);
  }
});

export default IconCalendar;
