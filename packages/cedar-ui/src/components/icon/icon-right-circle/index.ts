import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconRightCircle from './icon-right-circle.vue';

export const IconRightCircle = Object.assign(_IconRightCircle, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconRightCircle.name, _IconRightCircle);
  }
});

export default IconRightCircle;
