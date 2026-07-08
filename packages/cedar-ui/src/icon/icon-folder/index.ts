import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconFolder from './icon-folder.vue';

export const IconFolder = Object.assign(_IconFolder, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFolder.name, _IconFolder);
  }
});

export default IconFolder;
