import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconErrorUnknown from './icon-error-unknown.vue';

export const IconErrorUnknown = Object.assign(_IconErrorUnknown, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconErrorUnknown.name, _IconErrorUnknown);
  }
});

export default IconErrorUnknown;
