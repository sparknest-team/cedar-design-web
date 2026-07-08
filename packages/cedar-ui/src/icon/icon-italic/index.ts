import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconItalic from './icon-italic.vue';

export const IconItalic = Object.assign(_IconItalic, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconItalic.name, _IconItalic);
  }
});

export default IconItalic;
