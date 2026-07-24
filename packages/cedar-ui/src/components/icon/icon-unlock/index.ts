import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconUnlock from './icon-unlock.vue';

export const IconUnlock = Object.assign(_IconUnlock, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconUnlock.name, _IconUnlock);
  }
});

export default IconUnlock;
