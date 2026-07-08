import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconDragDotVertical from './icon-drag-dot-vertical.vue';

export const IconDragDotVertical = Object.assign(_IconDragDotVertical, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDragDotVertical.name, _IconDragDotVertical);
  }
});

export default IconDragDotVertical;
