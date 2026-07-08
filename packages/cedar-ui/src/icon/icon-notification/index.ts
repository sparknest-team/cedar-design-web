import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconNotification from './icon-notification.vue';

export const IconNotification = Object.assign(_IconNotification, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconNotification.name, _IconNotification);
  }
});

export default IconNotification;
