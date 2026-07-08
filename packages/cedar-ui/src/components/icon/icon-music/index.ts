import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMusic from './icon-music.vue';

export const IconMusic = Object.assign(_IconMusic, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMusic.name, _IconMusic);
  }
});

export default IconMusic;
