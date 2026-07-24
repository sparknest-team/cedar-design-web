import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCloudDownload from './icon-cloud-download.vue';

export const IconCloudDownload = Object.assign(_IconCloudDownload, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCloudDownload.name, _IconCloudDownload);
  }
});

export default IconCloudDownload;
