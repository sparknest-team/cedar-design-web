import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconPaste from './icon-paste.vue';

export const IconPaste = Object.assign(_IconPaste, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPaste.name, _IconPaste);
  }
});

export default IconPaste;
