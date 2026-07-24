import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFaceSmileFill from './icon-face-smile-fill.vue';

export const IconFaceSmileFill = Object.assign(_IconFaceSmileFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFaceSmileFill.name, _IconFaceSmileFill);
  }
});

export default IconFaceSmileFill;
