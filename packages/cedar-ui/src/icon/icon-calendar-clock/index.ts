import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCalendarClock from './icon-calendar-clock.vue';

export const IconCalendarClock = Object.assign(_IconCalendarClock, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCalendarClock.name, _IconCalendarClock);
  }
});

export default IconCalendarClock;
