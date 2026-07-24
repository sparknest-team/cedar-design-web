import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconLayers from './icon-layers.vue';

export const IconLayers = Object.assign(_IconLayers, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLayers.name, _IconLayers);
  }
});

export default IconLayers;
