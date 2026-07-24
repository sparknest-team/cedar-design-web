import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCheckCircleFill from './icon-check-circle-fill.vue';

export const IconCheckCircleFill = Object.assign(_IconCheckCircleFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCheckCircleFill.name, _IconCheckCircleFill);
  }
});

export default IconCheckCircleFill;
