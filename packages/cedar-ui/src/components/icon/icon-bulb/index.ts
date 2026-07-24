import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconBulb from './icon-bulb.vue';

export const IconBulb = Object.assign(_IconBulb, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconBulb.name, _IconBulb);
  }
});

export default IconBulb;
