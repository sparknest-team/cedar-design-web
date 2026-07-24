import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFolderDelete from './icon-folder-delete.vue';

export const IconFolderDelete = Object.assign(_IconFolderDelete, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFolderDelete.name, _IconFolderDelete);
  }
});

export default IconFolderDelete;
