import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconQrcode from './icon-qrcode.vue';

export const IconQrcode = Object.assign(_IconQrcode, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconQrcode.name, _IconQrcode);
  }
});

export default IconQrcode;
