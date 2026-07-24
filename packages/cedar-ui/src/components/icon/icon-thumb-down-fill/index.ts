import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconThumbDownFill from './icon-thumb-down-fill.vue';

export const IconThumbDownFill = Object.assign(_IconThumbDownFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconThumbDownFill.name, _IconThumbDownFill);
  }
});

export default IconThumbDownFill;
