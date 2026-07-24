import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconBold from './icon-bold.vue';

export const IconBold = Object.assign(_IconBold, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconBold.name, _IconBold);
  }
});

export default IconBold;
