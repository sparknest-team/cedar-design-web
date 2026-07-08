import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconEar from './icon-ear.vue';

export const IconEar = Object.assign(_IconEar, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconEar.name, _IconEar);
  }
});

export default IconEar;
