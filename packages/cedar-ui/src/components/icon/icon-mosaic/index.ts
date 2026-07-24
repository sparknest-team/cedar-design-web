import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconMosaic from './icon-mosaic.vue';

export const IconMosaic = Object.assign(_IconMosaic, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMosaic.name, _IconMosaic);
  }
});

export default IconMosaic;
