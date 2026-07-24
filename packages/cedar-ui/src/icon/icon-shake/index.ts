import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconShake from './icon-shake.vue';

export const IconShake = Object.assign(_IconShake, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconShake.name, _IconShake);
  }
});

export default IconShake;
