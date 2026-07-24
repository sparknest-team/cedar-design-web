import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconMoon from './icon-moon.vue';

export const IconMoon = Object.assign(_IconMoon, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMoon.name, _IconMoon);
  }
});

export default IconMoon;
