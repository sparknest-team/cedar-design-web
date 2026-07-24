import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconPlayArrow from './icon-play-arrow.vue';

export const IconPlayArrow = Object.assign(_IconPlayArrow, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPlayArrow.name, _IconPlayArrow);
  }
});

export default IconPlayArrow;
