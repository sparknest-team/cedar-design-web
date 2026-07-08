import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconGoogle from './icon-google.vue';

export const IconGoogle = Object.assign(_IconGoogle, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconGoogle.name, _IconGoogle);
  }
});

export default IconGoogle;
