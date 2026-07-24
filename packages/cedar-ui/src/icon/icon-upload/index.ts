import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconUpload from './icon-upload.vue';

export const IconUpload = Object.assign(_IconUpload, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconUpload.name, _IconUpload);
  }
});

export default IconUpload;
