import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconHighlight from './icon-highlight.vue';

export const IconHighlight = Object.assign(_IconHighlight, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconHighlight.name, _IconHighlight);
  }
});

export default IconHighlight;
