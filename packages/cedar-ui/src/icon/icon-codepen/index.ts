import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCodepen from './icon-codepen.vue';

export const IconCodepen = Object.assign(_IconCodepen, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCodepen.name, _IconCodepen);
  }
});

export default IconCodepen;
