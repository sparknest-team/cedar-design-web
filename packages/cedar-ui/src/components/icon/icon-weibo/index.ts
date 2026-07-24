import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconWeibo from './icon-weibo.vue';

export const IconWeibo = Object.assign(_IconWeibo, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconWeibo.name, _IconWeibo);
  }
});

export default IconWeibo;
