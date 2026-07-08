import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPhone from './icon-phone.vue';

export const IconPhone = Object.assign(_IconPhone, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPhone.name, _IconPhone);
  }
});

export default IconPhone;
