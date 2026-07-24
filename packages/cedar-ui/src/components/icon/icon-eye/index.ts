import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconEye from './icon-eye.vue';

export const IconEye = Object.assign(_IconEye, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconEye.name, _IconEye);
  }
});

export default IconEye;
