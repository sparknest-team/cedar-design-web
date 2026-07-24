import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconUpCircle from './icon-up-circle.vue';

export const IconUpCircle = Object.assign(_IconUpCircle, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconUpCircle.name, _IconUpCircle);
  }
});

export default IconUpCircle;
