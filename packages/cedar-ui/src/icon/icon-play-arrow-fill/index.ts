import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconPlayArrowFill from './icon-play-arrow-fill.vue';

export const IconPlayArrowFill = Object.assign(_IconPlayArrowFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPlayArrowFill.name, _IconPlayArrowFill);
  }
});

export default IconPlayArrowFill;
