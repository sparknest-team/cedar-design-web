import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconZoomIn from './icon-zoom-in.vue';

export const IconZoomIn = Object.assign(_IconZoomIn, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconZoomIn.name, _IconZoomIn);
  }
});

export default IconZoomIn;
