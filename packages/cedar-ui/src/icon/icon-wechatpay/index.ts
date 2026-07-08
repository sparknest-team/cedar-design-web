import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconWechatpay from './icon-wechatpay.vue';

export const IconWechatpay = Object.assign(_IconWechatpay, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconWechatpay.name, _IconWechatpay);
  }
});

export default IconWechatpay;
