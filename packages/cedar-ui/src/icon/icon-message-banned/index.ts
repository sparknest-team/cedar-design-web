import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMessageBanned from './icon-message-banned.vue';

export const IconMessageBanned = Object.assign(_IconMessageBanned, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMessageBanned.name, _IconMessageBanned);
  }
});

export default IconMessageBanned;
