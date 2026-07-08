import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconFile from './icon-file.vue';

export const IconFile = Object.assign(_IconFile, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFile.name, _IconFile);
  }
});

export default IconFile;
