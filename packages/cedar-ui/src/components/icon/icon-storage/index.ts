import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconStorage from './icon-storage.vue';

export const IconStorage = Object.assign(_IconStorage, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconStorage.name, _IconStorage);
  }
});

export default IconStorage;
