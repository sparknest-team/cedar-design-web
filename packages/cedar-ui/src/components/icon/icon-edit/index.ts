import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconEdit from './icon-edit.vue';

export const IconEdit = Object.assign(_IconEdit, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconEdit.name, _IconEdit);
  }
});

export default IconEdit;
