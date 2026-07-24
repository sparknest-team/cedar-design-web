import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconRefresh from './icon-refresh.vue';

export const IconRefresh = Object.assign(_IconRefresh, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconRefresh.name, _IconRefresh);
  }
});

export default IconRefresh;
