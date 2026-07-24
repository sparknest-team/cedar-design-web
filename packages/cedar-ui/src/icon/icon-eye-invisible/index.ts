import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconEyeInvisible from './icon-eye-invisible.vue';

export const IconEyeInvisible = Object.assign(_IconEyeInvisible, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconEyeInvisible.name, _IconEyeInvisible);
  }
});

export default IconEyeInvisible;
