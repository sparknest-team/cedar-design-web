import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconArrowFall from './icon-arrow-fall.vue';

export const IconArrowFall = Object.assign(_IconArrowFall, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconArrowFall.name, _IconArrowFall);
  }
});

export default IconArrowFall;
