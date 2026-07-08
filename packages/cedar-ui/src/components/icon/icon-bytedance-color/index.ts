import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconBytedanceColor from './icon-bytedance-color.vue';

export const IconBytedanceColor = Object.assign(_IconBytedanceColor, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconBytedanceColor.name, _IconBytedanceColor);
  }
});

export default IconBytedanceColor;
