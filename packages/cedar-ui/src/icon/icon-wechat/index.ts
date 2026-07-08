import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconWechat from './icon-wechat.vue';

export const IconWechat = Object.assign(_IconWechat, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconWechat.name, _IconWechat);
  }
});

export default IconWechat;
