import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFileImage from './icon-file-image.vue';

export const IconFileImage = Object.assign(_IconFileImage, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFileImage.name, _IconFileImage);
  }
});

export default IconFileImage;
