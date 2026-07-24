import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconDragArrow from './icon-drag-arrow.vue';

export const IconDragArrow = Object.assign(_IconDragArrow, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDragArrow.name, _IconDragArrow);
  }
});

export default IconDragArrow;
