import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconSync from './icon-sync.vue';

export const IconSync = Object.assign(_IconSync, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSync.name, _IconSync);
  }
});

export default IconSync;
