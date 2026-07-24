import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconMenu from './icon-menu.vue';

export const IconMenu = Object.assign(_IconMenu, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMenu.name, _IconMenu);
  }
});

export default IconMenu;
