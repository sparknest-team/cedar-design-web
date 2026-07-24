import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconSunFill from './icon-sun-fill.vue';

export const IconSunFill = Object.assign(_IconSunFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSunFill.name, _IconSunFill);
  }
});

export default IconSunFill;
