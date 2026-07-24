import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFontColors from './icon-font-colors.vue';

export const IconFontColors = Object.assign(_IconFontColors, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFontColors.name, _IconFontColors);
  }
});

export default IconFontColors;
