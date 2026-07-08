import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSend from './icon-send.vue';

export const IconSend = Object.assign(_IconSend, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSend.name, _IconSend);
  }
});

export default IconSend;
