import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconBgColors from './icon-bg-colors.vue';

export const IconBgColors = Object.assign(_IconBgColors, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconBgColors.name, _IconBgColors);
  }
});

export default IconBgColors;
