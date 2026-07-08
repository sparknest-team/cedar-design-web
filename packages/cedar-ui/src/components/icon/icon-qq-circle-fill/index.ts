import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconQqCircleFill from './icon-qq-circle-fill.vue';

export const IconQqCircleFill = Object.assign(_IconQqCircleFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconQqCircleFill.name, _IconQqCircleFill);
  }
});

export default IconQqCircleFill;
