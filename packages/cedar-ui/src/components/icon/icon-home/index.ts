import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconHome from './icon-home.vue';

export const IconHome = Object.assign(_IconHome, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconHome.name, _IconHome);
  }
});

export default IconHome;
