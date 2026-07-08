import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPlayCircleFill from './icon-play-circle-fill.vue';

export const IconPlayCircleFill = Object.assign(_IconPlayCircleFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPlayCircleFill.name, _IconPlayCircleFill);
  }
});

export default IconPlayCircleFill;
