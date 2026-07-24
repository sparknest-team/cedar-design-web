import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFaceBookCircleFill from './icon-faceBook-circle-fill.vue';

export const IconFaceBookCircleFill = Object.assign(_IconFaceBookCircleFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFaceBookCircleFill.name, _IconFaceBookCircleFill);
  }
});

export default IconFaceBookCircleFill;
