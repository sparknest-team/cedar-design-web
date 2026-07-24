import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconLeftCircle from './icon-left-circle.vue';

export const IconLeftCircle = Object.assign(_IconLeftCircle, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLeftCircle.name, _IconLeftCircle);
  }
});

export default IconLeftCircle;
