import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconArchive from './icon-archive.vue';

export const IconArchive = Object.assign(_IconArchive, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconArchive.name, _IconArchive);
  }
});

export default IconArchive;
