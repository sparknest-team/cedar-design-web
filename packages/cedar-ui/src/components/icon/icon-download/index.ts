import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconDownload from './icon-download.vue';

export const IconDownload = Object.assign(_IconDownload, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDownload.name, _IconDownload);
  }
});

export default IconDownload;
