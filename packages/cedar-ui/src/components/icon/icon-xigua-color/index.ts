import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconXiguaColor from './icon-xigua-color.vue';

export const IconXiguaColor = Object.assign(_IconXiguaColor, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconXiguaColor.name, _IconXiguaColor);
  }
});

export default IconXiguaColor;
