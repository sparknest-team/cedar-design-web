import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconApps from './icon-apps.vue';

export const IconApps = Object.assign(_IconApps, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconApps.name, _IconApps);
  }
});

export default IconApps;
