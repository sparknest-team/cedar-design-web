import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconExport from './icon-export.vue';

export const IconExport = Object.assign(_IconExport, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconExport.name, _IconExport);
  }
});

export default IconExport;
