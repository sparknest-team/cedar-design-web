import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFileVideo from './icon-file-video.vue';

export const IconFileVideo = Object.assign(_IconFileVideo, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFileVideo.name, _IconFileVideo);
  }
});

export default IconFileVideo;
