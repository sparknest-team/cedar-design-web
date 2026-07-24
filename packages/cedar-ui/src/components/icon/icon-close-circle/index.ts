import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCloseCircle from './icon-close-circle.vue';

export const IconCloseCircle = Object.assign(_IconCloseCircle, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCloseCircle.name, _IconCloseCircle);
  }
});

export default IconCloseCircle;
