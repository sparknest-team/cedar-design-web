import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconInfoCircle from './icon-info-circle.vue';

export const IconInfoCircle = Object.assign(_IconInfoCircle, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconInfoCircle.name, _IconInfoCircle);
  }
});

export default IconInfoCircle;
