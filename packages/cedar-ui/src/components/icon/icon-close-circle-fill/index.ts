import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCloseCircleFill from './icon-close-circle-fill.vue';

export const IconCloseCircleFill = Object.assign(_IconCloseCircleFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCloseCircleFill.name, _IconCloseCircleFill);
  }
});

export default IconCloseCircleFill;
