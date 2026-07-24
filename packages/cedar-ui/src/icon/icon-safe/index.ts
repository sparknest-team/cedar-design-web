import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconSafe from './icon-safe.vue';

export const IconSafe = Object.assign(_IconSafe, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSafe.name, _IconSafe);
  }
});

export default IconSafe;
