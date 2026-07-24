import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCamera from './icon-camera.vue';

export const IconCamera = Object.assign(_IconCamera, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCamera.name, _IconCamera);
  }
});

export default IconCamera;
