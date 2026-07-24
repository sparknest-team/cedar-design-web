import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconClose from './icon-close.vue';

export const IconClose = Object.assign(_IconClose, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconClose.name, _IconClose);
  }
});

export default IconClose;
