import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPaste from './icon-paste.vue';

export const IconPaste = Object.assign(_IconPaste, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPaste.name, _IconPaste);
  }
});

export default IconPaste;
