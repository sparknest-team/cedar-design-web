import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconDriveFile from './icon-drive-file.vue';

export const IconDriveFile = Object.assign(_IconDriveFile, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDriveFile.name, _IconDriveFile);
  }
});

export default IconDriveFile;
