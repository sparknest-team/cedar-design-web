import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconNav from './icon-nav.vue';

export const IconNav = Object.assign(_IconNav, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconNav.name, _IconNav);
  }
});

export default IconNav;
