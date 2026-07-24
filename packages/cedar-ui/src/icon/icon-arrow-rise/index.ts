import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconArrowRise from './icon-arrow-rise.vue';

export const IconArrowRise = Object.assign(_IconArrowRise, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconArrowRise.name, _IconArrowRise);
  }
});

export default IconArrowRise;
