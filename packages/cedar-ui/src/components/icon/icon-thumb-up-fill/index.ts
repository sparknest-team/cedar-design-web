import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconThumbUpFill from './icon-thumb-up-fill.vue';

export const IconThumbUpFill = Object.assign(_IconThumbUpFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconThumbUpFill.name, _IconThumbUpFill);
  }
});

export default IconThumbUpFill;
