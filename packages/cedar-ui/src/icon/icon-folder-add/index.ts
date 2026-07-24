import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFolderAdd from './icon-folder-add.vue';

export const IconFolderAdd = Object.assign(_IconFolderAdd, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFolderAdd.name, _IconFolderAdd);
  }
});

export default IconFolderAdd;
