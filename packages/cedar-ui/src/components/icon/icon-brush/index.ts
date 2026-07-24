import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconBrush from './icon-brush.vue';

export const IconBrush = Object.assign(_IconBrush, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconBrush.name, _IconBrush);
  }
});

export default IconBrush;
