import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconPauseCircleFill from './icon-pause-circle-fill.vue';

export const IconPauseCircleFill = Object.assign(_IconPauseCircleFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPauseCircleFill.name, _IconPauseCircleFill);
  }
});

export default IconPauseCircleFill;
