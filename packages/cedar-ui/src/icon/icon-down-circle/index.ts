import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconDownCircle from './icon-down-circle.vue';

export const IconDownCircle = Object.assign(_IconDownCircle, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDownCircle.name, _IconDownCircle);
  }
});

export default IconDownCircle;
