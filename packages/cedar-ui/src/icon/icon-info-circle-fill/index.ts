import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconInfoCircleFill from './icon-info-circle-fill.vue';

export const IconInfoCircleFill = Object.assign(_IconInfoCircleFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconInfoCircleFill.name, _IconInfoCircleFill);
  }
});

export default IconInfoCircleFill;
