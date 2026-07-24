import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconAlipayCircle from './icon-alipay-circle.vue';

export const IconAlipayCircle = Object.assign(_IconAlipayCircle, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconAlipayCircle.name, _IconAlipayCircle);
  }
});

export default IconAlipayCircle;
