import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconDashboard from './icon-dashboard.vue';

export const IconDashboard = Object.assign(_IconDashboard, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDashboard.name, _IconDashboard);
  }
});

export default IconDashboard;
