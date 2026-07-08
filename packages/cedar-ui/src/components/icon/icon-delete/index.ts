import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconDelete from './icon-delete.vue';

export const IconDelete = Object.assign(_IconDelete, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDelete.name, _IconDelete);
  }
});

export default IconDelete;
