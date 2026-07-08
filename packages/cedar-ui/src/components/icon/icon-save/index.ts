import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSave from './icon-save.vue';

export const IconSave = Object.assign(_IconSave, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSave.name, _IconSave);
  }
});

export default IconSave;
