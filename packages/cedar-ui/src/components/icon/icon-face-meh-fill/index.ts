import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFaceMehFill from './icon-face-meh-fill.vue';

export const IconFaceMehFill = Object.assign(_IconFaceMehFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFaceMehFill.name, _IconFaceMehFill);
  }
});

export default IconFaceMehFill;
