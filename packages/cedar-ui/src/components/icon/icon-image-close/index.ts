import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconImageClose from './icon-image-close.vue';

export const IconImageClose = Object.assign(_IconImageClose, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconImageClose.name, _IconImageClose);
  }
});

export default IconImageClose;
