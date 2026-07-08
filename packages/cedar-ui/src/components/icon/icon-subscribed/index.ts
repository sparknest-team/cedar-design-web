import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSubscribed from './icon-subscribed.vue';

export const IconSubscribed = Object.assign(_IconSubscribed, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSubscribed.name, _IconSubscribed);
  }
});

export default IconSubscribed;
