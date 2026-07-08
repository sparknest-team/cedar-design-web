import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconTiktokColor from './icon-tiktok-color.vue';

export const IconTiktokColor = Object.assign(_IconTiktokColor, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconTiktokColor.name, _IconTiktokColor);
  }
});

export default IconTiktokColor;
