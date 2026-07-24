import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconMinusCircle from './icon-minus-circle.vue';

export const IconMinusCircle = Object.assign(_IconMinusCircle, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMinusCircle.name, _IconMinusCircle);
  }
});

export default IconMinusCircle;
