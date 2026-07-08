import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconLarkColor from './icon-lark-color.vue';

export const IconLarkColor = Object.assign(_IconLarkColor, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLarkColor.name, _IconLarkColor);
  }
});

export default IconLarkColor;
