import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFire from './icon-fire.vue';

export const IconFire = Object.assign(_IconFire, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFire.name, _IconFire);
  }
});

export default IconFire;
