import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMessage from './icon-message.vue';

export const IconMessage = Object.assign(_IconMessage, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMessage.name, _IconMessage);
  }
});

export default IconMessage;
