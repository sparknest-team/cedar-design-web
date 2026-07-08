import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconScan from './icon-scan.vue';

export const IconScan = Object.assign(_IconScan, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconScan.name, _IconScan);
  }
});

export default IconScan;
