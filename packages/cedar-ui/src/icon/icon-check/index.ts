import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCheck from './icon-check.vue';

export const IconCheck = Object.assign(_IconCheck, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCheck.name, _IconCheck);
  }
});

export default IconCheck;
