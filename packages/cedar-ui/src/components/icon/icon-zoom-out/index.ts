import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconZoomOut from './icon-zoom-out.vue';

export const IconZoomOut = Object.assign(_IconZoomOut, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconZoomOut.name, _IconZoomOut);
  }
});

export default IconZoomOut;
