import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconTwitterCircleFill from './icon-twitter-circle-fill.vue';

export const IconTwitterCircleFill = Object.assign(_IconTwitterCircleFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconTwitterCircleFill.name, _IconTwitterCircleFill);
  }
});

export default IconTwitterCircleFill;
