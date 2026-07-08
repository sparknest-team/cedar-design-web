import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconWeiboCircleFill from './icon-weibo-circle-fill.vue';

export const IconWeiboCircleFill = Object.assign(_IconWeiboCircleFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconWeiboCircleFill.name, _IconWeiboCircleFill);
  }
});

export default IconWeiboCircleFill;
