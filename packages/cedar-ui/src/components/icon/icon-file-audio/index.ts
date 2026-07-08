import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconFileAudio from './icon-file-audio.vue';

export const IconFileAudio = Object.assign(_IconFileAudio, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFileAudio.name, _IconFileAudio);
  }
});

export default IconFileAudio;
