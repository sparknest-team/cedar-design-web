import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFaceFrownFill from './icon-face-frown-fill.vue';

export const IconFaceFrownFill = Object.assign(_IconFaceFrownFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFaceFrownFill.name, _IconFaceFrownFill);
  }
});

export default IconFaceFrownFill;
