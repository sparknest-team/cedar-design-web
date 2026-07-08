import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconCloud from './icon-cloud.vue';

export const IconCloud = Object.assign(_IconCloud, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCloud.name, _IconCloud);
  }
});

export default IconCloud;
