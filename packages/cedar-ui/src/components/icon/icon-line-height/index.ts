import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconLineHeight from './icon-line-height.vue';

export const IconLineHeight = Object.assign(_IconLineHeight, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLineHeight.name, _IconLineHeight);
  }
});

export default IconLineHeight;
