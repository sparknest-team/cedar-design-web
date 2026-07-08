import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMinusCircleFill from './icon-minus-circle-fill.vue';

export const IconMinusCircleFill = Object.assign(_IconMinusCircleFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMinusCircleFill.name, _IconMinusCircleFill);
  }
});

export default IconMinusCircleFill;
