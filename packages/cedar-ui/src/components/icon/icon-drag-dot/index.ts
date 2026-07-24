import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconDragDot from './icon-drag-dot.vue';

export const IconDragDot = Object.assign(_IconDragDot, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDragDot.name, _IconDragDot);
  }
});

export default IconDragDot;
