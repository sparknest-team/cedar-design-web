import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconDesktop from './icon-desktop.vue';

export const IconDesktop = Object.assign(_IconDesktop, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDesktop.name, _IconDesktop);
  }
});

export default IconDesktop;
