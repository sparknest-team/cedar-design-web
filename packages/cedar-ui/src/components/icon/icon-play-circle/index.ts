import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPlayCircle from './icon-play-circle.vue';

export const IconPlayCircle = Object.assign(_IconPlayCircle, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPlayCircle.name, _IconPlayCircle);
  }
});

export default IconPlayCircle;
