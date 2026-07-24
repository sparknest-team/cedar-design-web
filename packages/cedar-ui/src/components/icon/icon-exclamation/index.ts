import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconExclamation from './icon-exclamation.vue';

export const IconExclamation = Object.assign(_IconExclamation, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconExclamation.name, _IconExclamation);
  }
});

export default IconExclamation;
