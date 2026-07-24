import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconMoreVertical from './icon-more-vertical.vue';

export const IconMoreVertical = Object.assign(_IconMoreVertical, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMoreVertical.name, _IconMoreVertical);
  }
});

export default IconMoreVertical;
