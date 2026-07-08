import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconImport from './icon-import.vue';

export const IconImport = Object.assign(_IconImport, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconImport.name, _IconImport);
  }
});

export default IconImport;
