import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconPauseCircle from './icon-pause-circle.vue';

export const IconPauseCircle = Object.assign(_IconPauseCircle, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPauseCircle.name, _IconPauseCircle);
  }
});

export default IconPauseCircle;
