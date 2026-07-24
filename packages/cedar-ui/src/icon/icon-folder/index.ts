import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFolder from './icon-folder.vue';

export const IconFolder = Object.assign(_IconFolder, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFolder.name, _IconFolder);
  }
});

export default IconFolder;
