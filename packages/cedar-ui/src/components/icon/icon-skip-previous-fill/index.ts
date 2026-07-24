import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconSkipPreviousFill from './icon-skip-previous-fill.vue';

export const IconSkipPreviousFill = Object.assign(_IconSkipPreviousFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSkipPreviousFill.name, _IconSkipPreviousFill);
  }
});

export default IconSkipPreviousFill;
