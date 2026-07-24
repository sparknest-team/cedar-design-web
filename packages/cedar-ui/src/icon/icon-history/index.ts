import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconHistory from './icon-history.vue';

export const IconHistory = Object.assign(_IconHistory, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconHistory.name, _IconHistory);
  }
});

export default IconHistory;
