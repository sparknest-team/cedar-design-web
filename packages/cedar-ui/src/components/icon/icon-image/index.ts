import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconImage from './icon-image.vue';

export const IconImage = Object.assign(_IconImage, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconImage.name, _IconImage);
  }
});

export default IconImage;
