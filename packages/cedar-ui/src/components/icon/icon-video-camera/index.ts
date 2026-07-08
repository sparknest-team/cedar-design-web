import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconVideoCamera from './icon-video-camera.vue';

export const IconVideoCamera = Object.assign(_IconVideoCamera, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconVideoCamera.name, _IconVideoCamera);
  }
});

export default IconVideoCamera;
