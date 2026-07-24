import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconNotificationClose from './icon-notification-close.vue';

export const IconNotificationClose = Object.assign(_IconNotificationClose, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconNotificationClose.name, _IconNotificationClose);
  }
});

export default IconNotificationClose;
