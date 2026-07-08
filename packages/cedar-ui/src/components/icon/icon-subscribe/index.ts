import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSubscribe from './icon-subscribe.vue';

export const IconSubscribe = Object.assign(_IconSubscribe, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSubscribe.name, _IconSubscribe);
  }
});

export default IconSubscribe;
