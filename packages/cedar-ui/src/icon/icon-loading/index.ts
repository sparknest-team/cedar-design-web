import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconLoading from './icon-loading.vue';

export const IconLoading = Object.assign(_IconLoading, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLoading.name, _IconLoading);
  }
});

export default IconLoading;
